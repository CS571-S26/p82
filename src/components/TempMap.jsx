export default function TempMap({ data, activeId }) {
  return (
    <div
      className="w-100 h-100 position-relative overflow-hidden"
      style={{ background: "#f0f0f0" }}
    >
      {/* grid */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage:
            "linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {data.map((res) => {
        const lng = res.location?.longitude || res.coordinates?.longitude;
        const lat = res.location?.latitude || res.coordinates?.latitude;
        const left = ((lng + 89.42) * 5000) % 100;
        const top = ((43.08 - lat) * 5000) % 100;

        return (
          <div
            key={res.id}
            className="position-absolute rounded-circle border border-white shadow-sm transition-all"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: activeId === res.id ? "20px" : "12px",
              height: activeId === res.id ? "20px" : "12px",
              backgroundColor: activeId === res.id ? "#c5050c" : "#adadad",
              zIndex: activeId === res.id ? 10 : 1,
              transform: "translate(-50%, -50%)",
              transition: "all 0.2s ease",
            }}
          />
        );
      })}
      <div className="position-absolute bottom-0 end-0 p-2 text-muted small">
        Static Placeholder Map (Google Maps Placeholder)
      </div>
    </div>
  );
}
