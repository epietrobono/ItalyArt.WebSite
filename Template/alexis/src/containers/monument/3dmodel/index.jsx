import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Monument3dModel from "../../../components/monument-3dmodel";

const Monument3DModelContainer = ({contenuto}) => {
    const [show, setShow] = useState(false);
  
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="main-content container-ita-2">
            <div className="row justify-content-center module-3d img-3d">
                <div className="img-3d-overlay"></div>
                <div className="container-button-3Dmodel ">
                    
                    <Button className=" btn-primary btn-italyart botton-monument-carousel container-button-position" id="button-3d" title="Visita il 3D" onClick={handleShow}>Visita il 3D</Button>
                </div>
                <Image rounded  src={process.env.PUBLIC_URL + contenuto.image.path} alt={contenuto.image.alt}></Image>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Monument3dModel iframe={contenuto.model3D}></Monument3dModel>
                </Modal.Body>
            </Modal>
        </ section>
    );
};

Monument3DModelContainer.propTypes = {
    contenuto: PropTypes.object
}

export default Monument3DModelContainer;