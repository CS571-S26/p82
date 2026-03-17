import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <>
      <Navbar sticky="top" expand="md" collapseOnSelect className="navbar-custom">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Badger Gameday Survival Guide
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/parking-map">
                Parking Map
              </Nav.Link>
              <Nav.Link as={Link} to="/restaurant-finder">
                Restaurant Finder
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
