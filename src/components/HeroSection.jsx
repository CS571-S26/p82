import { Link } from "react-router";
import { Container, Button } from "react-bootstrap";
import { MapPin, Utensils, LayoutDashboard } from "lucide-react";
import campRandallImg from "../assets/camp_randall.jpg";

export default function HeroSection() {
  return (
    <div
      className="text-white py-5 d-flex align-items-center"
      style={{
        minHeight: "500px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${campRandallImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container className="py-5">
        <div className="text-center">
          <h1
            className="display-3 fw-bold mb-3"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Badger Gameday Survival Guide
          </h1>
          <p
            className="lead mb-4"
            style={{ fontSize: "1.5rem", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
          >
            Navigate Badger football gamedays like a pro. Find parking, discover restaurants, and
            plan your perfect Saturday.
          </p>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button
              as={Link}
              to="/parking-map"
              variant="danger"
              size="lg"
              className="d-flex align-items-center gap-2 px-4 shadow"
            >
              <MapPin size={24} />
              Find Parking
            </Button>
            <Button
              as={Link}
              to="/restaurant-finder"
              variant="light"
              size="lg"
              className="d-flex align-items-center gap-2 px-4 shadow"
            >
              <Utensils size={24} />
              Find Food
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
