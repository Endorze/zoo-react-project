import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./googleMaps.module.css"

const GoogleMaps = () => {
  return (
    <MapContainer center={[59.8586, 17.6454]} zoom={13} style={{ height: "300px", width: "100%", marginTop: "var(--margin-distance)"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.8586, 17.6454]}>
        <Popup>Welcome to Bethesda's Gaming Studio</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GoogleMaps;