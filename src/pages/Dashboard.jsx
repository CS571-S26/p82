import { Container, Button, Row, Col, Card, ListGroup, Badge, Spinner } from "react-bootstrap";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Cloud, CloudRain, Sun, Wind } from "lucide-react";
import Countdown from "../components/Countdown.jsx";
import ScheduleWidget from "../components/ScheduleWidget.jsx";

export default function Dashboard({ savedParking, savedRestaurant }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // source: open-meteo.com
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=43.07012483649517&longitude=-89.41269783287409&current=cloud_cover,weather_code,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,temperature_2m,wind_speed_10m&timezone=America%2FChicago&past_days=0&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data.current);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Weather fetch failed");
        setLoading(false);
      });
  }, []);

  const getWeatherInfo = (code) => {
    if (code <= 3) return { label: "Clear/Partly Cloudy", icon: <Sun className="text-warning" /> };
    if (code <= 67) return { label: "Rainy", icon: <CloudRain className="text-primary" /> };
    return { label: "Cloudy", icon: <Cloud className="text-secondary" /> };
  };

  const weatherInfo = weather ? getWeatherInfo(weather.weather_code) : null;

  const getMapsLink = () => {
    if (!savedParking || !savedRestaurant) return "#";
    console.log(savedParking);
    console.log(savedRestaurant);
    const stadium = "Camp Randall Stadium, Madison, WI";
    const parName = encodeURIComponent(`${savedParking.name} Madison WI`);
    const resName = encodeURIComponent(`${savedRestaurant.name} Madison WI`);

    return `https://www.google.com/maps/dir/?api=1&origin=${parName}&destination=${stadium}&waypoints=${resName}&travelmode=walking`;
  };

  const staticMapSrc =
    savedParking && savedRestaurant
      ? `https://maps.googleapis.com/maps/api/staticmap?size=400x200&scale=2&maptype=roadmap&markers=color:gray|label:P|${encodeURIComponent(savedParking.name + " Madison WI")}&markers=color:red|label:F|${encodeURIComponent(savedRestaurant.name + " Madison WI")}&markers=color:red|label:S|Camp+Randall+Stadium&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
      : null;

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-end mb-4">
        <h1 className="fw-bold mb-0">Gameday Dashboard</h1>
        <Badge bg="dark" className="px-3 py-2">
          Madison, WI
        </Badge>
      </div>

      <Row className="g-4">
        {/* Countdown Timer */}
        <Col lg={8}>
          <Card
            className="border-0 shadow-sm text-white h-100"
            style={{ background: "linear-gradient(45deg, #c5050c, #9b040a)", borderRadius: "15px" }}
          >
            <Card.Body className="p-4 d-flex flex-column justify-content-center">
              <div className="text-uppercase fw-bold opacity-75 mb-3 text-center">
                Countdown to Kickoff
              </div>
              <Countdown />
            </Card.Body>
          </Card>
        </Col>

        {/* Weather Widget */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm h-100" style={{ borderRadius: "15px" }}>
            <Card.Body className="p-4">
              <div className="fw-bold text-muted small text-uppercase mb-3">Live Forecast</div>
              {loading ? (
                <div className="text-center py-4">
                  <Spinner animation="border" variant="danger" />
                </div>
              ) : (
                <div className="text-center">
                  <div className="display-4 fw-bold mb-1">
                    {Math.round(weather.temperature_2m)}°F
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                    {weatherInfo.icon}
                    <span className="fw-medium">{weatherInfo.label}</span>
                  </div>
                  <div className="p-2 bg-light rounded-pill d-inline-flex align-items-center px-3">
                    <Wind size={16} className="me-2 text-primary" />
                    <span className="small fw-bold">{weather.wind_speed_10m} MPH Winds</span>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Schedule */}
        <Col md={7}>
          <Card className="border-0 shadow-sm" style={{ borderRadius: "15px" }}>
            <Card.Body className="p-4">
              <h2 className="h5 fw-bold mb-4">Home Game Schedule</h2>
              <ScheduleWidget />
            </Card.Body>
          </Card>
        </Col>

        {/* Personal Itinerary */}
        <Col md={5}>
          <Card
            className="border-0 shadow-sm h-100"
            style={{ borderRadius: "15px", borderTop: "5px solid #c5050c" }}
          >
            <Card.Body className="p-4 d-flex flex-column">
              <h3 className="h5 fw-bold mb-4 text-center">Your Itinerary</h3>

              {savedParking && savedRestaurant ? (
                <div className="position-relative">
                  <div
                    className="position-absolute"
                    style={{
                      width: "2px",
                      backgroundColor: "#dee2e6",
                      top: "10px",
                      bottom: "10px",
                      left: "15px",
                      zIndex: 0,
                    }}
                  />

                  <div className="d-flex mb-4 position-relative" style={{ zIndex: 1 }}>
                    <div
                      className="bg-white border border-2 border-danger rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <span style={{ fontSize: "13px" }}>🅿️</span>
                    </div>
                    <div className="ms-3 text-start">
                      <div
                        className="text-muted small text-uppercase fw-bold"
                        style={{ fontSize: "13px", letterSpacing: "0.5px" }}
                      >
                        Park
                      </div>
                      <div className="fw-bold text-dark">{savedParking.name}</div>
                      {(savedParking?.name?.includes("60") ||
                        savedParking?.name?.includes("76")) && (
                        <a
                          href="https://uwbadgers.com/sports/2015/8/21/GEN_20140101243"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-danger small fw-bold text-decoration-underline d-block mt-1"
                        >
                          🚌 Bucky Shuttle Info
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Step 2: Food */}
                  <div className="d-flex mb-4 position-relative" style={{ zIndex: 1 }}>
                    <div
                      className="bg-white border border-2 border-danger rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <span style={{ fontSize: "13px" }}>🍕</span>
                    </div>
                    <div className="ms-3 text-start">
                      <div
                        className="text-muted small text-uppercase fw-bold"
                        style={{ fontSize: "13px", letterSpacing: "0.5px" }}
                      >
                        Eat
                      </div>
                      <div className="fw-bold text-dark">{savedRestaurant.name}</div>
                      <div className="d-flex gap-3 mt-1">
                        {savedRestaurant.url && (
                          <a
                            href={savedRestaurant.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-danger small fw-bold text-decoration-underline"
                          >
                            Website
                          </a>
                        )}
                        {savedRestaurant.phone && (
                          <a
                            href={`tel:${savedRestaurant.phone}`}
                            className="text-danger small fw-bold text-decoration-underline text-nowrap"
                          >
                            {savedRestaurant.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Stadium */}
                  <div className="d-flex mb-4 position-relative" style={{ zIndex: 1 }}>
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "32px", height: "32px", backgroundColor: "#E75F6D" }}
                    >
                      <span style={{ fontSize: "13px" }}>👐</span>
                    </div>
                    <div className="ms-3 text-start">
                      <div
                        className="text-muted small text-uppercase fw-bold"
                        style={{ fontSize: "13px", letterSpacing: "0.5px" }}
                      >
                        Game
                      </div>
                      <div className="fw-bold text-dark">Camp Randall Stadium</div>
                    </div>
                  </div>

                  {/* Map Preview */}
                  <div
                    className="position-relative mt-2 overflow-hidden"
                    style={{ borderRadius: "10px", height: "100px" }}
                  >
                    <img
                      src={staticMapSrc}
                      alt="Route Map"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <a
                      href={getMapsLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25 text-white text-decoration-none fw-bold opacity-0 hover-opacity-100 transition-all"
                    >
                      Open Route ↗
                    </a>
                  </div>
                </div>
              ) : (
                <div className="py-5 text-center">
                  <div className="mb-2">📍</div>
                  Select a parking and restaurant location to generate your Badger Gameday
                  itinerary!
                </div>
              )}

              <Button
                as={Link}
                to="/parking-map"
                variant="outline-danger"
                className="w-100 fw-bold py-2 mt-auto"
              >
                Update Plans
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
