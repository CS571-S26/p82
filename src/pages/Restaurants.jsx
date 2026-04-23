import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import RestaurantCarousel from "../components/RestaurantCarousel.jsx";
import BadgerMap from "../components/BadgerMap.jsx";

function Restaurants({ saveRestaurant, setSaveRestaurant }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "restaurants")).then((snapshot) => {
      const restaurantData = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setRestaurants(restaurantData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading restaurants...</p>;
  }

  const handleSelectRestaurant = (restaurant) => {
    setSaveRestaurant(restaurant);
  };

  return (
    <div className="d-flex flex-column" style={{ height: "90vh" }}>
      <div className="bg-white py-3 border-bottom">
        <div className="container-fluid px-4">
          <h1 className="fw-bold text-dark">Restaurants</h1>
        </div>
      </div>

      {/* map */}
      <div
        className="flex-grow-1 position-relative bg-light border-bottom"
        style={{ minHeight: "60vh" }}
      >
        <BadgerMap data={restaurants} activeId={activeId} />
      </div>

      {/* carousel */}
      <div className="py-3 bg-white shadow-lg">
        <RestaurantCarousel
          data={restaurants}
          onHover={setActiveId}
          activeId={activeId}
          savedId={saveRestaurant}
          onSelect={handleSelectRestaurant}
        />
      </div>
    </div>
  );
}

export default Restaurants;
