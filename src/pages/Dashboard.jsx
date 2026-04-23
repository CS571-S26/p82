import { Container, Button, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Dashboard({ savedParking, savedRestaurant }) {
  return (
    <Container className="py-4">
      <h2 className="mb-4">Gameday Dashboard</h2>
      <Row className="g-4">
        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm border-0 bg-danger text-white">
            <Card.Body className="text-center">
              <Card.Title>Countdown to Kickoff</Card.Title>
              {/* TODO: Make countdown component */}
              <div>
                <p>Work in progress!</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                Weather forecast <span>Madison, WI</span>
              </Card.Title>
              <div>
                {/* TODO: Implement live weather API */}
                <p>Work in progress!</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="h-100 shadow-sm border-0">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Parking:</strong> {savedParking?.name || "None selected"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Pregame Food:</strong> {savedRestaurant?.name || "None selected"}
              </ListGroup.Item>
            </ListGroup>
            <Card.Footer className="bg-white border-0">
              <Button
                variant="outline-danger"
                as={Link}
                to="/parking-map"
                size="sm"
                className="w-100"
              >
                Update Plans
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
