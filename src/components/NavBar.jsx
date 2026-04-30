import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MapPin, Utensils, Home, LayoutDashboard, Info } from "lucide-react";
import Footer from "./Footer";
import "../App.css";

export default function NavBar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const showFooter = ["/parking-map", "/restaurant-finder"].includes(location.pathname);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        bg="danger"
        variant="dark"
        sticky="top"
        expand="md"
        collapseOnSelect
        className="shadow-sm"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Badger Gameday Survival Guide
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={`d-flex align-items-center gap-1 ${isActive("/") ? "active" : ""}`}
              >
                <Home size={18} />
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={`d-flex align-items-center gap-1 ${isActive("/about") ? "active" : ""}`}
              >
                <Info size={18} />
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/parking-map"
                className={`d-flex align-items-center gap-1 ${isActive("/parking-map") ? "active" : ""}`}
              >
                <MapPin size={18} />
                Parking
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/restaurant-finder"
                className={`d-flex align-items-center gap-1 ${isActive("/restaurant-finder") ? "active" : ""}`}
              >
                <Utensils size={18} />
                Restaurants
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard"
                className={`d-flex align-items-center gap-1 ${isActive("/dashboard") ? "active" : ""}`}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="flex-grow-1">
        <Outlet />
      </main>
      {!showFooter && <Footer />}
    </div>
  );
}
