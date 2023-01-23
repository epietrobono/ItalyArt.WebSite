import PropTypes from "prop-types";
import Monument3dModel from "../../../components/monument-3dmodel";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Monument3DModelContainer = ({conentuto}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="row justify-content-center">
                <div className="container-button-3Dmodel">
                    <Button className="btn btn-primary btn-italyart" title="Visita il 3D" onClick={handleShow}>Visita il 3D</Button>
                </div>
                <Monument3dModel conentuto={conentuto}></Monument3dModel>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Monument3dModel conentuto={conentuto}></Monument3dModel>
                </Modal.Body>
            </Modal>
        </>
    );
};

Monument3DModelContainer.propTypes = {
    conentuto: PropTypes.string
}

export default Monument3DModelContainer;