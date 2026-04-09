import { useState, useEffect } from "react";
import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import RestaurantCarousel from "../components/RestaurantCarousel.jsx";
import TempMap from "../components/TempMap.jsx";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "restaurants")).then((snapshot) => {
      const restaurantData = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setRestaurants(restaurantData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading restaurants...</p>;
  }

  return (
    <div className="d-flex flex-column" style={{ height: "90vh" }}>
      <div className="bg-white py-3 border-bottom">
        <div className="container-fluid px-4">
          <h1 className="fw-bold text-dark">Restaurants</h1>
        </div>
      </div>

      {/* map */}
      <div
        className="flex-grow-1 position-relative bg-light border-bottom"
        style={{ minHeight: "60vh" }}
      >
        <TempMap data={restaurants} activeId={activeId} />
      </div>

      {/* carousel */}
      <div className="py-3 bg-white shadow-lg">
        <RestaurantCarousel data={restaurants} onHover={setActiveId} activeId={activeId} />
      </div>
    </div>
  );

  // !------ Used to seed firestore w/ initial restaurant data ------!
  // useEffect(() => {
  //   const seedDatabase = async () => {
  //     const restaurantData = [
  //       {
  //         placeId: "ChIJHaWbXDRTBogRomwymGRKiBQ",
  //         name: "Dotty Dumpling's Dowry",
  //         cuisine: "Burgers",
  //         address: "317 N Frances St",
  //         coordinates: {
  //           lat: 43.07304697695613,
  //           lng: -89.39568423287398,
  //         },
  //         walkDistance: 1.0,
  //         walkTime: 23,
  //         rating: 4.6,
  //         priceLevel: 2,
  //         avgWait: 45,
  //         phone: "(608) 259-0000",
  //         acceptsReservations: false,
  //         url: "http://www.dottydumplingsdowry.com/",
  //       },

  //       {
  //         placeId: "ChIJzTnVYMWsB4gRfKjlRFEpZl4",
  //         name: "Jordan's Big Ten Pub",
  //         cuisine: "Pub Grub",
  //         address: "1330 Regent St",
  //         coordinates: {
  //           lat: 43.068483420326025,
  //           lng: -89.40833020403812,
  //         },
  //         walkDistance: 0.3,
  //         walkTime: 7,
  //         rating: 4.6,
  //         priceLevel: 2,
  //         avgWait: 60,
  //         phone: "(608) 251-6375",
  //         acceptsReservations: false,
  //         url: "https://big10pub.com/",
  //       },

  //       {
  //         placeId: "ChIJJxyDjjhTBogRoaXIlEj_rL0",
  //         name: "The Coopers Tavern",
  //         cuisine: "Pub Grub",
  //         address: "20 W Mifflin St",
  //         coordinates: {
  //           lat: 43.07530239521539,
  //           lng: -89.38613801752949,
  //         },
  //         walkDistance: 1.5,
  //         walkTime: 34,
  //         rating: 4.5,
  //         priceLevel: 3,
  //         avgWait: 30,
  //         phone: "(608) 256-1600",
  //         acceptsReservations: true,
  //         url: "https://www.thecooperstavern.com/",
  //       },

  //       {
  //         placeId: "ChIJv7KqIcWsB4gRD8r9-uuSKh0",
  //         name: "SconnieBar",
  //         cuisine: "Pub Grub",
  //         address: "1421 Regent St",
  //         coordinates: {
  //           lat: 43.067724599625144,
  //           lng: -89.41017318570252,
  //         },
  //         walkDistance: 0.2,
  //         walkTime: 5,
  //         rating: 4.4,
  //         priceLevel: 2,
  //         avgWait: 50,
  //         phone: "(608) 819-8610",
  //         acceptsReservations: false,
  //         url: "http://sconniebar.com/",
  //       },

  //       {
  //         placeId: "ChIJHxgqqEBTBogRJLOAk9gWpBg",
  //         name: "The Old Fashioned",
  //         cuisine: "Classic Wisconsin",
  //         address: "23 N Pinckney St",
  //         coordinates: {
  //           lat: 43.076578698673515,
  //           lng: -89.38372216170973,
  //         },
  //         walkDistance: 1.7,
  //         walkTime: 37,
  //         rating: 4.5,
  //         priceLevel: 3,
  //         avgWait: 30,
  //         phone: "(608) 310-4545",
  //         acceptsReservations: false,
  //         url: "http://www.theoldfashioned.com/",
  //       },

  //       {
  //         placeId: "ChIJS-sgezRTBogRMMQhlZ9JNes",
  //         name: "Nitty Gritty",
  //         cuisine: "American",
  //         address: "223 N Frances St",
  //         coordinates: {
  //           lat: 43.07195494818414,
  //           lng: -89.39573196091149,
  //         },
  //         walkDistance: 0.9,
  //         walkTime: 21,
  //         rating: 4.2,
  //         priceLevel: 2,
  //         avgWait: 45,
  //         phone: "(608) 251-2521",
  //         acceptsReservations: true,
  //         url: "http://www.thegritty.com/",
  //       },

  //       {
  //         placeId: "ChIJrcpKoDVTBogRa_lrX6JIbaw",
  //         name: "State Street Brats",
  //         cuisine: "American",
  //         address: "603 State St Unit 1015",
  //         coordinates: {
  //           lat: 43.0748840774025,
  //           lng: -89.39596244151372,
  //         },
  //         walkDistance: 1.1,
  //         walkTime: 25,
  //         rating: 4.1,
  //         priceLevel: 2,
  //         avgWait: 45,
  //         phone: "(608) 255-5544",
  //         acceptsReservations: false,
  //         url: "https://statestreetbrats.com/",
  //       },

  //       {
  //         placeId: "ChIJC1gbXMOsB4gRNLPN_32vfOM",
  //         name: "Mickies Dairy Bar",
  //         cuisine: "Breakfast",
  //         address: "1511 Monroe St",
  //         coordinates: {
  //           lat: 43.06786603960816,
  //           lng: -89.41307338503653,
  //         },
  //         walkDistance: 0.1,
  //         walkTime: 3,
  //         rating: 4.7,
  //         priceLevel: 2,
  //         avgWait: 60,
  //         phone: "(608) 256-9476",
  //         acceptsReservations: false,
  //         url: "http://www.mickiesdairybar.com/",
  //       },
  //     ];

  //     const colRef = collection(db, "restaurants");
  //     console.log("Starting upload...");

  //     for (const item of restaurantData) {
  //       try {
  //         await addDoc(colRef, {
  //           placeId: String(item.placeId),
  //           name: String(item.name),
  //           cuisine: String(item.cuisine),
  //           address: String(item.address),
  //           // GeoPoint
  //           location: new GeoPoint(Number(item.coordinates.lat), Number(item.coordinates.lng)),
  //           // Numbers (Floats/Doubles)
  //           walkDistance: parseFloat(item.walkDistance),
  //           rating: parseFloat(item.rating),
  //           // Numbers (Integers)
  //           walkTime: parseInt(item.walkTime),
  //           priceLevel: parseInt(item.priceLevel),
  //           avgWait: parseInt(item.avgWait),
  //           // Strings
  //           phone: String(item.phone),
  //           // Booleans
  //           acceptsReservations: Boolean(item.acceptsReservations),
  //           url: String(item.url),
  //         });
  //         console.log(`Uploaded: ${item.name}`);
  //       } catch (e) {
  //         console.error(`Error uploading ${item.name}: `, e);
  //       }
  //     }
  //     alert("Database Seeded Successfully!");
  //   };

  //   //seedDatabase(); // Uncomment to run!
  // }, []);
}

export default Restaurants;
