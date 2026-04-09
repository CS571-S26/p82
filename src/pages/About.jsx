import { Container, Row, Col, Card } from "react-bootstrap";
import { ShieldCheck, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-light min-vh-100">
      {/* header */}
      <div className="bg-danger text-white py-5 mb-5 shadow-sm">
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold">About the Survival Guide</h1>
          <p className="lead opacity-75">Built by one Badger fan, for all fans!</p>
        </Container>
      </div>

      <Container className="pb-5">
        <Row className="justify-content-center text-center g-4">
          {/* mission statement */}
          <Col lg={8} className="mb-5">
            <h2 className="fw-bold text-dark">The Mission</h2>
            <p className="text-secondary fs-5">
              Whether it's your first game at Camp Randall or your hundredth, Badger Gameday
              Survival Guide has got your back. We combine real-time parking data, local restaurant
              insights, and stadium proximity tools into a personalized dashboard for your
              convenience. No more circling for hours looking for a parking spot, or waiting in line
              to get a bite to eat.
            </p>
          </Col>

          {/* features */}
          <Row className="g-4 mb-5">
            <Col md={4}>
              <div className="p-3">
                <ShieldCheck size={40} className="text-danger mb-3" />
                <h4 className="fw-bold">Reliable Data</h4>
                <p className="text-muted">
                  We use the Google Places/Maps API and real-time city of Madison parking data to
                  ensure you have the most accurate and up-to-date info.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3">
                <Zap size={40} className="text-danger mb-3" />
                <h4 className="fw-bold">Fast Planning</h4>
                <p className="text-muted">
                  Save your favorite spots and calculate walking times and best routes to Camp
                  Randall in seconds.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3">
                <Users size={40} className="text-danger mb-3" />
                <h4 className="fw-bold">Local Spirit</h4>
                <p className="text-muted">
                  Created by a current UW-Madison student who is committed to making gamedays fun
                  and hassle-free for all fans.
                </p>
              </div>
            </Col>
          </Row>

          {/* about the creator */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm p-4">
              <h3 className="fw-bold mb-3">The Project</h3>
              <p className="text-muted">
                Developed as a course project for CS 571, this app was built using React, Google
                Firebase, and various APIs.
              </p>
              <div className="d-flex justify-content-center gap-2 mt-2">
                <span className="badge bg-danger-subtle text-danger px-3 py-2">React</span>
                <span className="badge bg-danger-subtle text-danger px-3 py-2">Firebase</span>
                <span className="badge bg-danger-subtle text-danger px-3 py-2">
                  Google Maps API
                </span>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
