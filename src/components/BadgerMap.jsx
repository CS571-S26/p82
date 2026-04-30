import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { Trophy } from "lucide-react";

export default function BadgerMap({ data, activeId, setActiveId, cardRefs }) {
  const MAP_STYLE_ID = "56c5099176aed3436c238194";
  const defaultCenter = { lat: 43.073, lng: -89.401 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={defaultCenter}
        defaultZoom={14}
        mapId={MAP_STYLE_ID}
        disableDefaultUI={true}
        zoomControl={true}
      >
        <AdvancedMarker
          position={{ lat: 43.07012483649517, lng: -89.41270856171015 }}
          title="Camp Randall Stadium"
        >
          <div
            style={{
              backgroundColor: "#FC4A50",
              padding: "8px",
              borderRadius: "50%",
              border: "3px solid white",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "20px" }}>🏈</span>
          </div>
        </AdvancedMarker>

        {data.map((item) => {
          const geoPoint = item.location || item.coordinates;
          const position = {
            lat: geoPoint?.latitude ?? geoPoint?.lat,
            lng: geoPoint?.longitude ?? geoPoint?.lng,
          };
          const isActive = activeId === item.id;

          if (!position.lat || !position.lng) {
            console.log(`missing coords for: ${item.name}`);
            return null;
          }

          const highlightCard = (id) => {
            setActiveId(id);
            const cardElem = cardRefs?.current?.[id];
            if (cardElem) {
              cardElem.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            }
          };

          return (
            <AdvancedMarker
              key={item.id}
              position={position}
              title={item.name}
              zIndex={isActive ? 1000 : 1}
              onClick={() => highlightCard(item.id)}
            >
              <Pin
                background={isActive ? "#c5050c" : "#adadad"}
                borderColor={"#ffffff"}
                glyphColor={"#ffffff"}
                scale={isActive ? 1.5 : 1.0}
              />
            </AdvancedMarker>
          );
        })}
      </Map>
    </APIProvider>
  );
}
