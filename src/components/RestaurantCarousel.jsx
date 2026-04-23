import RestaurantCard from "./RestaurantCard";

export default function RestaurantCarousel({ data, onHover, activeId, savedId, onSelect }) {
  return (
    <div className="d-flex overflow-auto px-3 gap-3 no-scrollbar" style={{ paddingBottom: "10px" }}>
      {data.map((res) => (
        <div
          key={res.id}
          onMouseEnter={() => onHover(res.id)}
          onMouseLeave={() => onHover(null)}
          style={{
            minWidth: "300px",
            transform: activeId === res.id ? "translateY(-5px)" : "none",
            transition: "transform 0.2s ease",
          }}
        >
          <RestaurantCard
            key={res.id}
            restaurant={res}
            isSelected={activeId === res.id}
            isSaved={savedId?.id === res.id}
            onSelect={onSelect}
          />
        </div>
      ))}
    </div>
  );
}
