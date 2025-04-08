import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./googleMaps.module.css"
import styles from "./googleMaps.module.css"
import MaxWidthLayout from "../Layout/MaxWidthLayout/maxWidthLayout"

const GoogleMaps = () => {
  return (
    <div className={styles.wrapper}>
      <MaxWidthLayout>
        <div className={styles.googleTextSection}>
          <div>
            <h2>Location</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut et officiis delectus! Deserunt nemo inventore illo doloribus repellendus laborum hic, accusamus neque quos asperiores porro obcaecati. Provident, eligendi. Fugiat!</p>
          </div>
          <div>
            <h2>Animals</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut et officiis delectus! Deserunt nemo inventore illo doloribus repellendus laborum hic, accusamus neque quos asperiores porro obcaecati. Provident, eligendi. Fugiat!</p>
          </div>
          <div>
            <h2>Price</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut et officiis delectus! Deserunt nemo inventore illo doloribus repellendus laborum hic, accusamus neque quos asperiores porro obcaecati. Provident, eligendi. Fugiat!</p>
          </div>
        </div>
    
    <MapContainer center={[59.8586, 17.6454]} zoom={13} style={{ height: "300px", width: "100%", marginTop: "var(--margin-distance)"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.8586, 17.6454]}>
        <Popup>Welcome to Zoo Scandinavia</Popup>
      </Marker>
    </MapContainer>

    <div>
      <h2>Visitation hours</h2>
      <p>Monday - Friday | 10:00 - 19:00</p>
      <p>Saturday - Sunday | Closed</p>
    </div>
    </MaxWidthLayout>
    </div>
  );
};

export default GoogleMaps;