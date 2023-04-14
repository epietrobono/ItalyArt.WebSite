import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PinComponent from "../../../components/opsm-marker";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const MapComponent = ({
    monuments,
    onViewportChanged,
    isLoading,
    category,
    search,
}) => {
    const [viewport, setViewport] = useState({
        center: [41.894038, 12.49748], // Coordinata iniziale (Milano)
        zoom: 5.5,
    });
    const [tmpSearch, setTmpSearch] = useState("");
    const [tmpCategory, setTmpCategory] = useState("");
    const [firstLoad, setFirstLoad] = useState(true);

    // Aggiungi il tuo token di accesso Mapbox qui
    const mapboxAccessToken =
        "pk.eyJ1IjoiaXRhbHlhcnQiLCJhIjoiY2xnNWlma3F0MDNzZTNucW5jYjd1NXBtayJ9.GYododkimgqH1yEe8ZKiCw";

    const mapID = "clg5im3xr001k01la2ij25bt8";

    const idUtenza = "italyart";
    // Sostituisci con il tuo URL dello stile Mapbox
    const mapboxStyleUrl = `https://api.mapbox.com/styles/v1/${idUtenza}/${mapID}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`;

    const MapEvents = () => {
        const map = useMapEvents({
            load: () => {
                onViewportChanged(map.getBounds());
            },
            moveend: () => {
                onViewportChanged(map.getBounds());
            },
        });

        useEffect(() => {
            if (search && search != tmpSearch) {
                try {
                    const provider = new OpenStreetMapProvider();
                    provider
                        .search({ query: search })
                        .then((results) => {
                            if (results.length > 0) {
                                const { x, y } = results[0];
                                const newCenter = [
                                    parseFloat(y),
                                    parseFloat(x),
                                ];
                                map.setView(newCenter, 13);
                                onViewportChanged(map.getBounds());
                                setTmpSearch(search);
                            }
                        })
                        .error();
                } catch {}
            } else if (firstLoad) {
                setFirstLoad(false);
                const newCenter = [41.894048, 12.49758];
                map.setView(newCenter, 5.5);
                onViewportChanged(map.getBounds());
            }
        }, [search]);

        useEffect(() => {
            if (category && category != tmpCategory) {
                setFirstLoad(false);
                const newCenter = [41.894048, 12.49758];
                map.setView(newCenter, 5.5);
                onViewportChanged(map.getBounds());
                setTmpCategory(category);
            }
        }, [category]);

        return null;
    };

    return (
        <MapContainer
            style={{ height: "600px", width: "100%" }}
            center={viewport.center}
            zoom={viewport.zoom}
            minZoom={5}
        >
            <TileLayer
                url={mapboxStyleUrl}
                tileSize={512}
                zoomOffset={-1}
                attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors &amp; <a href="https://www.mapbox.com/feedback/">Mapbox</a>'
            />
            {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            /> */}
            {!isLoading &&
                monuments?.map((monument) => (
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
    category: PropTypes.string,
    search: PropTypes.string,
};

export default MapComponent;
