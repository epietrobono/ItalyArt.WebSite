import PropTypes from "prop-types";
import Monument3dModel from "../../../components/monument-3dmodel";
import { Image } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Monument3DModelContainer = ({contenuto}) => {
    const [show, setShow] = useState(false);
  
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="row justify-content-center">
                <div className="container-button-3Dmodel">
                    <Button className="btn btn-primary btn-italyart" title="Visita il 3D" onClick={handleShow}>Visita il 3D</Button>
                </div>
                <Image rounded src={process.env.PUBLIC_URL + contenuto.image}></Image>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Monument3dModel iframe={contenuto.model3D}></Monument3dModel>
                </Modal.Body>
            </Modal>
        </>
    );
};

Monument3DModelContainer.propTypes = {
    contenuto: PropTypes.object
}

export default Monument3DModelContainer;