import GoogleMapReact from 'google-map-react';
import React from "react";
import MapPlace from "../../../components/map-place";
import MapPlaceTour from "../../../components/map-place-tour";
import MonumentsData from "../../../data/map-monuments.json";


function MapContainer() {
    const defaultProps = {
        center: {
            lat: 42.22577, 
            lng: 12.44499
        },
        zoom: 9.5,
        greatPlaceCoords: {lat: 43.327874, lng: 11.321994}
        };
    const data = MonumentsData.it;
    
    return (
        // Important! Always set the container height explicitly
        <div className="map-position" style={{ height: '70vh', width: '100%' }}>
           <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC5scNnifCVhQTXGB2lciM4Ai15rYKgDrM" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                >
                {
                    data.monuments.map((val, key)=>{
                        if(val.type=="3Dmodel"){
                            return(
                                <MapPlaceTour lat={val.gps.latitude} lng={val.gps.longitude} text={val.title} key={key} />
                            )
                        }else{
                            return(
                                <MapPlace lat={val.gps.latitude} lng={val.gps.longitude} text={val.title} key={key} />
                            )
                        }
                    })
                }
            </GoogleMapReact>
        </div>
        );
    }

export default MapContainer;


// <MapPlaceTour lat={43.137874} lng={11.321994} text={'Altra Location'} />
// <MapPlace {...defaultProps.greatPlaceCoords} text={'Duomo di Siena'} />