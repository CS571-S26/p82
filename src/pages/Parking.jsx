import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import ParkingCard from "../components/ParkingCard.jsx";
import BadgerMap from "../components/BadgerMap.jsx";

function Parking({ savedLot, setSavedLot }) {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  // CORS proxy: city of madison stated that their live data is available
  // for app development, but does not currently support cross-origin requests
  const PROXY_BASE = "https://corsproxy.io/?url=";
  // from city of madison open data source
  const TARGET_URL = "https://www.cityofmadison.com/parking/data/ramp-availability.json";

  useEffect(() => {
    getDocs(collection(db, "parking"))
      .then((snapshot) => {
        // get static firestore data
        const staticParking = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        const parkingURL = `${PROXY_BASE}${encodeURIComponent(TARGET_URL)}?t=${new Date().getTime()}`;
        fetch(parkingURL)
          .then((res) => res.json())
          .then((apiRes) => {
            // get live parking ramp vacancy data
            const liveParking = apiRes.vacancies;
            // merge static and live data
            const mergeData = staticParking.map((lot) => ({
              ...lot,
              vacant: liveParking[String(lot.liveId)] ?? "---",
              isLive: true,
            }));
            setParkingSpots(mergeData);
            console.log(`Last updated: ${apiRes.modified}`);
          })
          .catch((err) => {
            // use db data if fetch fails
            console.error("Error fetching live spots, using static data:", err);
            setParkingSpots(staticParking);
          })
          .finally(() => setLoading(false));
      })
      .catch((err) => {
        // catch firestore errors
        console.error("Error accessing db:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading parking options...</p>;
  }

  const handleSelectLot = (lot) => {
    setSavedLot(lot);
  };

  return (
    <div className="d-flex" style={{ height: "calc(100vh - 56px)", overflow: "hidden" }}>
      {/* scrollable sidebar */}
      <div
        className="bg-light border-end custom-scrollbar"
        style={{
          width: "450px",
          overflowY: "auto",
          padding: "20px",
        }}
      >
        <h2 className="fw-bold mb-4">Parking Options</h2>
        <div className="d-flex flex-column gap-3">
          {parkingSpots.map((spot) => (
            <div
              key={spot.id}
              onMouseEnter={() => setActiveId(spot.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <ParkingCard
                lot={spot}
                isSelected={activeId === spot.id}
                isSaved={savedLot?.id === spot.id}
                onSelect={handleSelectLot}
              />
            </div>
          ))}
        </div>
      </div>

      {/* map */}
      <div className="flex-grow-1 bg-white">
        <BadgerMap data={parkingSpots} activeId={activeId} />
      </div>
    </div>
  );
}

export default Parking;
