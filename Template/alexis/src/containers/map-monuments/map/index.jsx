import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from "react";
import MapPlace from "../../../components/map-place";
import MapPlaceTour from "../../../components/map-place-tour";
import Api from "../../../services/Api";


function MapContainer() {
    const defaultProps = {
        center: {
            lat: 42.22577, 
            lng: 12.44499
        },
        zoom: 9.5,
        greatPlaceCoords: {lat: 43.327874, lng: 11.321994}
        };
    const demoFancyMapStyles = require("../../../data/map-style.json");

    const [MapContainerData, setMapContainerData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetMonuments()  
            setMapContainerData(results);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    
    return (
        // Important! Always set the container height explicitly
        <>
        {!isLoading && (
        <div className="map-position" style={{ height: '70vh', width: '100%' }}>
           <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC5scNnifCVhQTXGB2lciM4Ai15rYKgDrM" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                defaultOptions={{ styles: demoFancyMapStyles }}
                yesIWantToUseGoogleMapApiInternals
                >
                {
                    MapContainerData.Monuments.map((val, key)=>{
                        if(val.Type=="3Dmodel"){
                            return(
                                <MapPlaceTour lat={val.Gps.Latitude} lng={val.Gps.Longitude} text={val.Title} key={key} />
                            )
                        }else{
                            return(
                                <MapPlace lat={val.Gps.Latitude} lng={val.Gps.Longitude} text={val.Title} key={key} />
                            )
                        }
                    })
                }
            </GoogleMapReact>
        </div>
        )}
        </>
        );
    }

export default MapContainer;


// <MapPlaceTour lat={43.137874} lng={11.321994} text={'Altra Location'} />
// <MapPlace {...defaultProps.greatPlaceCoords} text={'Duomo di Siena'} />