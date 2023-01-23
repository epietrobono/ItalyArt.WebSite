import React from "react";
import GoogleMapReact from 'google-map-react';
import MapPlace from "../../../components/map-place";


function MapContainer() {
    const defaultProps = {
        center: {
            lat: 43.327874, 
            lng: 11.321994
        },
        zoom: 10,
        greatPlaceCoords: {lat: 43.327874, lng: 11.321994}
        };
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
           <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC5scNnifCVhQTXGB2lciM4Ai15rYKgDrM" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                >
                <MapPlace lat={43.137874} lng={11.321994} text={'Altra Location'} />
                <MapPlace {...defaultProps.greatPlaceCoords} text={'Duomo di Siena'} />
            </GoogleMapReact>
        </div>
        );
    }

export default MapContainer;