import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1>The Smart Way to Saturday</h1>
        <p>Navigate Madison gamedays with real-time parking and dining data.</p>
      </div>
    </Container>
  );
}

export default Home;
