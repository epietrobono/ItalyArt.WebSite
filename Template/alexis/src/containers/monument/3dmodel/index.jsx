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
            <div className="row justify-content-center module-3d img-3d">
                <div className="img-3d-overlay"></div>
                <div className="container-button-3Dmodel ">
                    { contenuto?.Titolo ?
                    (
                        <h3>{contenuto?.Titolo}</h3>
                    ):null
                    }
                    <Button className=" btn-primary btn-italyart botton-monument-carousel container-button-position" id="button-3d" title="Visita il 3D" onClick={handleShow}>Visita il 3D</Button>
                    <p>{contenuto?.Testo}</p>
                </div>
                <Image rounded  src={process.env.PUBLIC_URL + contenuto.Image?.Path} alt={contenuto.Image?.Alt}></Image>
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Monument3dModel iframe={contenuto.Model3D}></Monument3dModel>
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

Monument3DModelContainer.propTypes = {
    contenuto: PropTypes.object
}

export default Monument3DModelContainer;