import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PinComponent from '../../../components/opsm-marker';

const MapComponent = ({ monuments, onViewportChanged, isLoading }) => {
  const [viewport, setViewport] = useState({
    center: [45.4642, 9.1900], // Coordinata iniziale (Milano)
    zoom: 13,
  });

  const MapEvents = () => {
    const map = useMapEvents({
      moveend: () => {
        onViewportChanged(map.getBounds());
      },
    });
    return null;
  };

  useEffect(() => {
    const bounds = new window.L.LatLngBounds(viewport.center, viewport.center);
    onViewportChanged(bounds);
  }, []);

  return (
    <MapContainer
      style={{ height: '100%', width: '100%' }}
      center={viewport.center}
      zoom={viewport.zoom}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {isLoading && monuments?.map((monument) => (
        <PinComponent key={monument.Id} monument={monument} />
      ))}
      <MapEvents />
    </MapContainer>
  );
};

MapComponent.propTypes = {
  monuments: PropTypes.object,
  onViewportChanged: PropTypes.function,
  isLoading: PropTypes.bool
}

export default MapComponent;
