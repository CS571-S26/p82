import { Container, Card, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import QuickLinks from "../components/QuickLinks";
import { MapPin, Utensils, Cloud, Navigation } from "lucide-react";

function Home() {
  return (
    <div>
      <HeroSection />

      <QuickLinks />

      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold">What We Offer</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="text-danger mb-3">
                    <MapPin size={48} />
                  </div>
                  <Card.Title className="fw-bold">Live Parking Map</Card.Title>
                  <Card.Text>
                    Real-time availability for city-owned parking ramps with distance and walk time
                    to the stadium
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="text-danger mb-3">
                    <Utensils size={48} />
                  </div>
                  <Card.Title className="fw-bold">Restaurant Finder</Card.Title>
                  <Card.Text>
                    Discover nearby restaurants with availability, ratings, and reservation options
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="text-danger mb-3">
                    <Navigation size={48} />
                  </div>
                  <Card.Title className="fw-bold">Route Planning</Card.Title>
                  <Card.Text>
                    Estimated walking times and routes from your selected parking and restaurant
                    options to the stadium
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="text-danger mb-3">
                    <Cloud size={48} />
                  </div>
                  <Card.Title className="fw-bold">Personalized Dashboard</Card.Title>
                  <Card.Text>
                    Weather updates, saved parking spots, restaurant bookings, and more, all in one
                    place!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Card className="bg-danger text-white border-0 shadow">
          <Card.Body className="p-5 text-center">
            <h3 className="fw-bold mb-3">Ready for Gameday?</h3>
            <p className="lead mb-0">
              Start planning your perfect Badger gameday experience today.{" "}
              <strong>On, Wisconsin!</strong>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
