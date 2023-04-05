import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PinComponent from '../../../components/opsm-marker';

const MapComponent = ({ monuments, onViewportChanged, isLoading, category }) => {
  const [viewport, setViewport] = useState({
    center: [41.894038, 12.497480], // Coordinata iniziale (Milano)
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
  }, [category]);

  return (
    <MapContainer
      style={{ height: '600px', width: '100%' }}
      center={viewport.center}
      zoom={viewport.zoom}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {!isLoading && monuments?.map((monument) => (
        <PinComponent key={monument.Id} monument={monument} />
      ))} 
      <MapEvents />
    </MapContainer>
  );
};

MapComponent.propTypes = {
  monuments: PropTypes.array,
  onViewportChanged: PropTypes.func,
  isLoading: PropTypes.bool,
  category: PropTypes.string
}

export default MapComponent;
