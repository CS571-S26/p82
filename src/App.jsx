import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Parking from "./pages/Parking.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import NotFound from "./pages/NotFound.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parking-map" element={<Parking />} />
        <Route path="/restaurant-finder" element={<Restaurants />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
