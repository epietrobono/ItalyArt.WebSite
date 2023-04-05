import React from 'react';
import PropTypes from "prop-types";
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const PinComponent = ({ monument }) => {
  const pinColor = (type) => {
    switch (type) {
      case '4':
        return 'red';
      case '5':
        return 'blue';
      default:
        return 'black';
    }
  };

  const icon = new L.Icon({
    iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${pinColor(
      monument.Type
    )}.png`,
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <Marker position={[monument.Gps.Latitude, monument.Gps.Longitude]} icon={icon}>
      <Popup>
        <strong>{monument.Title}</strong>
        <br />
        {monument.Location}
      </Popup>
    </Marker>
  );
}

PinComponent.propTypes = {
  monument: PropTypes.shape({
    Type: PropTypes.string,
    Gps:PropTypes.shape({
      Longitude: PropTypes.string,
      Latitude: PropTypes.string,
    }),
    Title: PropTypes.string,
    Location: PropTypes.string
  })  
}

  
export default PinComponent;
