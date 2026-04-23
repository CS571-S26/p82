import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Parking from "./pages/Parking.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [savedLot, setSavedLot] = useState(() => {
    const savedParking = localStorage.getItem("savedParking");
    return savedParking ? JSON.parse(savedParking) : null;
  });
  const [saveRestaurant, setSaveRestaurant] = useState(() => {
    const saved = localStorage.getItem("savedRestaurant");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("savedParking", JSON.stringify(savedLot));
  }, [savedLot]);

  useEffect(() => {
    localStorage.setItem("savedRestaurant", JSON.stringify(saveRestaurant));
  }, [saveRestaurant]);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/parking-map"
          element={<Parking savedLot={savedLot} setSavedLot={setSavedLot} />}
        />
        <Route
          path="/restaurant-finder"
          element={
            <Restaurants saveRestaurant={saveRestaurant} setSaveRestaurant={setSaveRestaurant} />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard savedParking={savedLot} savedRestaurant={saveRestaurant} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
