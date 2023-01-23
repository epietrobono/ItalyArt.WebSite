import PropTypes from "prop-types";
import Tour360 from "../../../components/monument-tour360";
import Tour360ContentModal from "../../../components/monument-tour360modal";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MonumentTour360 = ({conentuto}) => {    
    const [show, setShow] = useState(false);
  
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="row justify-content-center">
                <div className="container-button-3Dmodel">
                    <Button className="btn btn-primary btn-italyart" title="Visita ora a 360" onClick={handleShow}>Visita ora a 360</Button>
                </div>
                <Tour360 conentuto={conentuto}></Tour360>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Tour360ContentModal conentuto={conentuto}></Tour360ContentModal>
                </Modal.Body>
            </Modal>
        </>
    );
};

MonumentTour360.propTypes = {
    conentuto: PropTypes.string
}

export default MonumentTour360;