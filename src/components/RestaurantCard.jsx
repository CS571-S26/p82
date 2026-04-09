import { Card, Badge } from "react-bootstrap";
import { Star, MapPin, CalendarCheck } from "lucide-react";

export default function RestaurantCard({ restaurant, isSelected }) {
  const placeholderImg = `https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=500&auto=format&fit=crop`;

  return (
    <Card
      className={`h-100 shadow-sm border-0 transition-all ${isSelected ? "shadow-lg" : ""}`}
      style={{
        width: "300px",
        border: isSelected ? "2px solid #c5050c" : "2px solid transparent",
        transition: "transform 0.2s ease, border 0.2s ease",
      }}
    >
      {/* image */}
      <div style={{ height: "140px", overflow: "hidden", position: "relative" }}>
        <Card.Img
          variant="top"
          src={placeholderImg}
          style={{ objectFit: "cover", height: "100%" }}
        />
        <Badge bg="dark" className="position-absolute top-0 end-0 m-2">
          {restaurant.cuisine}
        </Badge>

        {/* reservations label */}
        {restaurant.acceptsReservations && (
          <Badge bg="success" className="position-absolute top-0 start-0 m-2">
            Reservations
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column text-center">
        <Card.Title className="fw-bold mb-1">{restaurant.name}</Card.Title>

        {/* address */}
        <div className="d-flex align-items-center justify-content-center text-muted small mb-2">
          <MapPin size={12} className="me-1" />
          <span className="text-truncate" style={{ maxWidth: "200px" }}>
            {restaurant.address}
          </span>
        </div>

        {/* rating & walk time to Camp Randall */}
        <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
          <div className="d-flex align-items-center">
            <Star size={14} className="text-warning fill-warning me-1" />
            <span className="fw-bold">{restaurant.rating}</span>
          </div>
          <span className="text-muted">|</span>
          <span className="small text-secondary">{restaurant.walkTime} min walk</span>
        </div>

        {/* avg wait time */}
        <div className="mt-auto">
          <Badge
            bg={restaurant.avgWait > 40 ? "danger-subtle" : "success-subtle"}
            className={
              restaurant.avgWait > 40 ? "text-danger w-100 py-2" : "text-success w-100 py-2"
            }
          >
            Average Wait: {restaurant.avgWait} mins
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
}
