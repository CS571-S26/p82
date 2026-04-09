import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import ParkingCard from "../components/ParkingCard.jsx";
import TempMap from "../components/TempMap.jsx";

function Parking() {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "parking")).then((snapshot) => {
      const parking = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setParkingSpots(parking);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading parking options...</p>;
  }

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
              <ParkingCard lot={spot} isSelected={activeId === spot.id} />
            </div>
          ))}
        </div>
      </div>

      {/* map */}
      <div className="flex-grow-1 bg-white">
        <TempMap data={parkingSpots} activeId={activeId} />
      </div>
    </div>
  );
}

export default Parking;
