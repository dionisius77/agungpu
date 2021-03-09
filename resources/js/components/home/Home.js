
import { MapContainer, TileLayer } from "react-leaflet";

export default function Home() {
  const position = [-6.820618, 107.140689];
    return (
        <MapContainer center={position} zoom={11.5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> PUPR Kab. Cianjur'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}
