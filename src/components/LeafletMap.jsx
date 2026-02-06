import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/img/leaflet/marker-icon-2x.png',
  iconUrl: '/img/leaflet/marker-icon.png',
  shadowUrl: '/img/leaflet/marker-shadow.png',
});

const lat = 48.629194657231274;
const lng = -2.1120771896734203;
const position = [lat, lng];

export default function LeafletMap() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <strong>SLAMM MMA - Lieu d'entraînement</strong><br />
          361 Rue de la Saudrais<br />
          35800 Saint-Lunaire
        </Popup>
      </Marker>
    </MapContainer>
  );
}
