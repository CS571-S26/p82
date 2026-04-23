import { Card, Button, Badge } from "react-bootstrap";
import { MapPin, Clock, DollarSign, Car } from "lucide-react";

const ParkingCard = ({ lot, isSelected, isSaved, onSelect }) => {
  const vacantDisplay = lot.vacant !== undefined ? lot.vacant : "---";
  const totalDisplay = lot.totalSpaces || "---";

  const priceLabel = lot.cityOwned ? "/hr" : "/day";

  return (
    <Card
      className={`shadow-sm border-0 transition-all ${isSelected ? "shadow-md" : ""}`}
      style={{
        borderRadius: "12px",
        borderLeft: isSelected ? "6px solid #c5050c" : "6px solid transparent",
        transition: "all 0.2s ease",
        transform: isSelected ? "translateX(5px)" : "none",
      }}
    >
      <Card.Body className="p-3">
        {/* sidebar */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="fw-bold mb-0">{lot.name}</h5>
          <Badge bg={lot.vacant > 10 ? "success" : "warning"}>
            {lot.liveId ? vacantDisplay : totalDisplay} spots
          </Badge>
        </div>
        <div className="d-flex align-items-center text-muted mb-3 small">
          <MapPin size={14} className="me-1" />
          <span className="text-truncate">{lot.address}</span>
        </div>
        <div className="d-flex justify-content-between mb-3 text-dark small fw-medium">
          <span>
            <Clock size={14} className="me-1" />
            {lot.tags?.includes("Shuttle")
              ? `${lot.walkTime} min w/ Shuttle`
              : `${lot.walkTime} min`}
          </span>
          <span>
            <DollarSign size={14} className="me-1" />${lot.hourlyRate}
            {priceLabel}
          </span>
        </div>
        <Button
          variant={isSaved ? "outline-danger" : "danger"}
          onClick={() => onSelect(lot)}
          className="w-100 btn-sm fw-bold"
        >
          {isSaved ? "Selected" : "Select Lot"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ParkingCard;
