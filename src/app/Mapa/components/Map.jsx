"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({coordenadas}) => {
  return (
    <div className='w-full h-[500px]'>
      <MapContainer center={coordenadas} zoom={13} scrollWheelZoom={true} className='mx-auto my-4 w-9/12 aspect-square lg:w-8/12 lg:h-4/5'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordenadas}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
