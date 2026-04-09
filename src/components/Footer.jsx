import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold mb-1">Badger Gameday Survival Guide</h5>
            <p className="text-white-50 small mb-0">
              Making gameday easier for Badger fans since 2026
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="text-danger fw-bold small mb-0">On, Wisconsin! 🦡</p>
            <p className="text-white-50 small mb-0">
              <em>Not affiliated with the University of Wisconsin-Madison</em>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
