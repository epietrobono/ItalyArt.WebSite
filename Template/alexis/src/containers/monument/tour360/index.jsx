import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tour360ContentModal from "../../../components/monument-tour360modal";

const MonumentTour360 = ({contenuto}) => {    
    const [show, setShow] = useState(false);
  
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("in tour");
    return (
        <section className={`${contenuto?.IsPink? "text-image-section":"text-image-section-white"}`}>
        { contenuto?.Titolo ?
        (
            <div className="row justify-content-center main-content container-ita-2">
                <div className="col col-auto">
                    <h3>{contenuto?.Titolo}</h3> 
                </div>
            </div>
        ):null
        }
        <section className="main-content container-ita-2">
            <div className="row justify-content-center module-3d img-3d ">
            <div className="img-3d-overlay"></div>
                <div className="container-button-3Dmodel">
                    <Button className=" btn-primary botton-monument-carousel btn-italyart" id="button-360" title={`${contenuto?.ButtonText}`} onClick={handleShow}>{contenuto?.ButtonText}</Button>
                </div>
                <Image rounded src={process.env.PUBLIC_URL + contenuto.Image?.Path} alt={contenuto.Image?.Alt}></Image>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Tour360ContentModal url={contenuto.Tour360}></Tour360ContentModal>
                </Modal.Body>
            </Modal>
        </ section>
            { contenuto?.Testo ?
                (
                    <div className="row justify-content-center main-content container-ita-2">
                        <div className="col col-auto">
                            <p  className="mb-5">{contenuto?.Testo}</p>
                        </div>
                    </div>
                ):null
            }
        </section>
    );
};

MonumentTour360.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentTour360;