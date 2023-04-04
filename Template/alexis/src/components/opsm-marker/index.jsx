import React from 'react';
import PropTypes from "prop-types";
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const PinComponent = ({ monument }) => {
  const pinColor = (category) => {
    switch (category) {
      case 'chiese':
        return 'red';
      case 'panorami':
        return 'blue';
      default:
        return 'black';
    }
  };

  const icon = new L.Icon({
    iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${pinColor(
      monument.Category
    )}.png`,
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <Marker position={[monument.Latitude, monument.Longitude]} icon={icon}>
      <Popup>
        <strong>{monument.Name}</strong>
        <br />
        {monument.Address}
      </Popup>
    </Marker>
  );
}

PinComponent.propTypes = {
  monument: PropTypes.shape({
    Category: PropTypes.string,
    Longitude: PropTypes.string,
    Latitude: PropTypes.string,
    Name: PropTypes.string,
    Address: PropTypes.string
  })  
}

  
export default PinComponent;
