import GoogleMapReact from 'google-map-react';
import MapPlace from "../../../components/map-place";
import MapPlaceTour from "../../../components/map-place-tour";
import {React,useEffect, useState }  from "react";


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

    const [data, setData] = useState({});
    useEffect(() => {
        async function getAjaxApiData() {
            const postBody = {
                Pagina:"Home",
                Lingua:"IT"
            };
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postBody)
            };
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/Monuments`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
    
    return (
        // Important! Always set the container height explicitly
        <div className="map-position" style={{ height: '70vh', width: '100%' }}>
           <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC5scNnifCVhQTXGB2lciM4Ai15rYKgDrM" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                defaultOptions={{ styles: demoFancyMapStyles }}
                yesIWantToUseGoogleMapApiInternals
                >
                {
                    data.Monuments.map((val, key)=>{
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
        );
    }

export default MapContainer;


// <MapPlaceTour lat={43.137874} lng={11.321994} text={'Altra Location'} />
// <MapPlace {...defaultProps.greatPlaceCoords} text={'Duomo di Siena'} />