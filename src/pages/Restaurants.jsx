import { useState, useEffect, useRef } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import RestaurantCarousel from "../components/RestaurantCarousel.jsx";
import BadgerMap from "../components/BadgerMap.jsx";
import { Spinner } from "react-bootstrap";

function Restaurants({ saveRestaurant, setSaveRestaurant }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const cardRefs = useRef({});

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
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="danger" />
      </div>
    );
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
        <BadgerMap
          data={restaurants}
          activeId={activeId}
          setActiveId={setActiveId}
          cardRefs={cardRefs}
        />
      </div>

      {/* carousel */}
      <div className="py-3 bg-white shadow-lg">
        <RestaurantCarousel
          data={restaurants}
          onHover={setActiveId}
          activeId={activeId}
          savedId={saveRestaurant}
          onSelect={handleSelectRestaurant}
          cardRefs={cardRefs}
        />
      </div>
    </div>
  );
}

export default Restaurants;
