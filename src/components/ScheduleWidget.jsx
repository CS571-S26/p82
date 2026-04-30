import { ListGroup, Badge } from "react-bootstrap";

export default function ScheduleWidget() {
  const homeGames = [
    { opponent: "Western Illinois", date: new Date("2026-09-12T08:00:00"), label: "Sept 12" },
    { opponent: "Eastern Michigan", date: new Date("2026-09-19T08:00:00"), label: "Sept 19" },
    { opponent: "Michigan State", date: new Date("2026-10-03T08:00:00"), label: "Oct 3" },
    { opponent: "USC", date: new Date("2026-10-24T08:00:00"), label: "Oct 24" },
    { opponent: "Rutgers", date: new Date("2026-11-07T08:00:00"), label: "Nov 7" },
    { opponent: "Minnesota", date: new Date("2026-11-28T08:00:00"), label: "Nov 28" },
  ];

  const now = new Date();
  const upcomingGames = homeGames.filter((game) => game.date > now);

  return (
    <ListGroup variant="flush">
      {upcomingGames.map((game, index) => (
        <ListGroup.Item
          key={index}
          className="d-flex justify-content-between align-items-center bg-transparent px-0 py-3"
          style={{ borderBottom: index === upcomingGames.length - 1 ? "none" : "1px solid #eee" }}
        >
          <div className="d-flex flex-column">
            <span className="fw-bold text-dark mb-0">{game.opponent}</span>
            <span className="text-muted small">
              {game.label} • {"TBD"}
            </span>
          </div>

          <div className="text-end">
            <Badge
              pill
              bg={index === 0 ? "danger" : "light"}
              className={index === 0 ? "shadow-sm" : "text-dark border"}
            >
              {index === 0 ? "Next Home Game" : "Home"}
            </Badge>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
