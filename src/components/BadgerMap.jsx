import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function BadgerMap({ data, activeId }) {
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

          return (
            <AdvancedMarker
              key={item.id}
              position={position}
              title={item.name}
              zIndex={isActive ? 1000 : 1}
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
