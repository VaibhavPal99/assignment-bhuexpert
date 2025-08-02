import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix missing marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Post {
  id: string;
  title: string;
  price: number;
  latitude: number;
  longitude: number;
}

interface MapProps {
  posts: Post[];
  showMarkers?: boolean; // Optional flag to control marker display
}

function Map({ posts, showMarkers = false }: MapProps) {
  // Filter only valid posts with location
  const validPosts = posts.filter(
    (p) =>
      typeof p.latitude === "number" &&
      typeof p.longitude === "number" &&
      !isNaN(p.latitude) &&
      !isNaN(p.longitude)
  );

  // Default center: if no valid posts, show India center
  const center: [number, number] = validPosts.length > 0
    ? [validPosts[0].latitude, validPosts[0].longitude]
    : [20.5937, 78.9629]; // India's lat/lon

  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {showMarkers &&
        validPosts.map((post) => (
          <Marker
            key={post.id}
            position={[post.latitude, post.longitude]}
          >
            <Popup>
              <strong>{post.title}</strong>
              <br />
              ₹{post.price.toLocaleString()}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default Map;
