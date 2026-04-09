import { Container, Card, Row, Col } from "react-bootstrap";
import { Info, Ticket, Shield, Calendar } from "lucide-react";

export default function QuickLinks() {
  const links = [
    {
      icon: <Calendar size={40} />,
      title: "Game Schedule",
      description: "View the complete 2026 Badger football schedule",
      color: "danger",
      url: "https://uwbadgers.com/sports/football/schedule",
    },
    {
      icon: <Ticket size={40} />,
      title: "Ticket Portal",
      description: "Access your digital tickets and manage your seats",
      color: "primary",
      url: "https://uwbadgers.evenue.net/signin",
    },
    {
      icon: <Shield size={40} />,
      title: "Bag Policy",
      description: "Review stadium security and carry-in policies",
      color: "warning",
      url: "https://policy.wisc.edu/library/UW-600",
    },
    {
      icon: <Info size={40} />,
      title: "Additional Info",
      description: "Know before you go with stadium arrival and entry details",
      color: "success",
      // remember to update for 2026 season
      url: "https://uwbadgers.com/sports/2024/8/21/wisconsin-football-know-before-you-go",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">Gameday Quick Links</h2>
      <Row className="g-4">
        {links.map((link, index) => (
          <Col key={index} md={6} lg={3}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <Card
                className="h-100 shadow-sm border-0 quick-link-card"
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  borderRadius: "15px",
                }}
              >
                <Card.Body className="text-center">
                  <div className={`text-${link.color} mb-3`}>{link.icon}</div>
                  <Card.Title className="fw-bold">{link.title}</Card.Title>
                  <Card.Text className="text-muted">{link.description}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
