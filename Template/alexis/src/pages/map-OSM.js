import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-bootstrap';
import MapComponent from "../containers/map-monuments/map-opsm";
import MonumentCard from '../components/monument-card';
import Api from "../services/Api";

const MapMonumentsPage = () => {
  const [monuments, setMonuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted14, setIsMounted14] = useState(false);

  const fetchMonuments = async (NELat, NELon, SWLat, SWLon, category = '', search = '') => {
    await Api.GetMapMonuments(category,search,NELat,NELon,SWLat,SWLon).then((results) => {  
            setMonuments(results);
            setIsMounted14(true);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching monuments:', error);
          });
  };

  const handleViewportChanged = (bounds) => {
    const NELat = bounds.getNorthEast().lat;
    const NELon = bounds.getNorthEast().lng;
    const SWLat = bounds.getSouthWest().lat;
    const SWLon = bounds.getSouthWest().lng;
    fetchMonuments(NELat, NELon, SWLat, SWLon);
  };

  // if (!isMounted14 && isLoading) {
  //   return null; // non renderizzare il componente fino a quando non è montato
  // }
  return (
    <Container fluid>
      <Row style={{ height: '100vh' }}>
        <Col lg={4} style={{ overflowY: 'scroll' }}>
          {isLoading && monuments.Monuments?.map((monument) => (
            <MonumentCard key={monument?.Id} monument={monument} />
          ))}
        </Col>
        <Col lg={8}>
          <MapComponent monuments={monuments.Monuments} onViewportChanged={handleViewportChanged} isLoading={isLoading} />
        </Col>
      </Row>
    </Container>
  );
};

export default MapMonumentsPage;
