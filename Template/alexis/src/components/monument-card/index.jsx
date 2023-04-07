import PropType from "prop-types";
import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const MonumentCard = ({ data }) => {
    //<marquee direction="left" scrollAmount=4 height="100" width="150">
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        width < 600 && handleSideNavToggle();
    }, [width]);

    function handleSideNavToggle() {
        console.log("toggle it");
    }

    if (
        (data.Title.length > 20 && width <= 900) ||
        (data.Title.length > 25 && width > 900)
    ) {
        if (data.Location.length > 20) {
            return (
                <Link to={process.env.PUBLIC_URL + data.Url}>
                    <div className="shadow rounded p-2 card-monument-size">
                        {/*<div className="card-background" alt={data.image.alt} style={{ backgroundImage:`url(${process.env.PUBLIC_URL + data.image.path}) ` }}>*/}
                        <Image
                            rounded
                            alt={data.Image.Alt}
                            src={process.env.PUBLIC_URL + data.Image.Path}
                        ></Image>
                        {/*</div>*/}
                        <div className="textarea-monument-card">
                            <Marquee
                                direction={"left"}
                                gradient={false}
                                delay={5}
                            >
                                <h4 className="text-left monument-card-title">
                                    {data.Title} &nbsp; - &nbsp; 
                                </h4>
                            </Marquee>
                            <div className="d-flex justify-content-between">
                                <Marquee
                                    direction={"left"}
                                    gradient={false}
                                    delay={5}
                                    style={{ "margin-bottom": "30px" }}
                                >
                                    <p className="col col-auto ptp-5">
                                        {data.Location} &nbsp; - &nbsp; 
                                    </p>
                                </Marquee>
                                <Link
                                    to={process.env.PUBLIC_URL + data.Url}
                                    className="col col-auto btn btn-light border botton-card shadow rounded-pill mob-btn-card ml-3"
                                >
                                    {data.ButtonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        } else {
            return (
                <Link to={process.env.PUBLIC_URL + data.Url}>
                    <div className="shadow rounded p-2 card-monument-size">
                        {/*<div className="card-background" alt={data.image.alt} style={{ backgroundImage:`url(${process.env.PUBLIC_URL + data.image.path}) ` }}>*/}
                        <Image
                            rounded
                            alt={data.Image.Alt}
                            src={process.env.PUBLIC_URL + data.Image.Path}
                        ></Image>
                        {/*</div>*/}
                        <div className="textarea-monument-card">
                            <Marquee
                                direction={"left"}
                                gradient={false}
                                delay={5}
                            >
                                <h4 className="text-left monument-card-title">
                                    {data.Title} &nbsp; - &nbsp; 
                                </h4>
                            </Marquee>
                            <div className="d-flex justify-content-between">
                                <p className="col col-auto ptp-5">{data.Location}</p>
                                <Link
                                    to={process.env.PUBLIC_URL + data.Url}
                                    className="col col-auto btn btn-light border botton-card shadow rounded-pill mob-btn-card ml-3"
                                >
                                    {data.ButtonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    } else {
        if (data.Location.length > 20) {
            return (
                <Link to={process.env.PUBLIC_URL + data.Url}>
                    <div className="shadow rounded p-2 card-monument-size">
                        {/*<div className="card-background" alt={data.image.alt} style={{ backgroundImage:`url(${process.env.PUBLIC_URL + data.image.path}) ` }}>*/}
                        <Image
                            rounded
                            alt={data.Image.Alt}
                            src={process.env.PUBLIC_URL + data.Image.Path}
                        ></Image>
                        {/*</div>*/}
                        <div className="textarea-monument-card">
                            <h4 className="text-left monument-card-title">
                                {data.Title}
                            </h4>
                            <div className="d-flex justify-content-between">
                                <Marquee
                                    direction={"left"}
                                    gradient={false}
                                    delay={5}
                                    style={{ "margin-bottom": "30px" }}
                                >
                                    <p className="col col-auto ptp-5">
                                        {data.Location} &nbsp; - &nbsp; 
                                    </p>
                                </Marquee>
                                <Link
                                    to={process.env.PUBLIC_URL + data.Url}
                                    className="col col-auto btn btn-light border botton-card shadow rounded-pill mob-btn-card ml-3"
                                >
                                    {data.ButtonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        } else {
            return (
                <Link to={process.env.PUBLIC_URL + data.Url}>
                    <div className="shadow rounded p-2 card-monument-size">
                        {/*<div className="card-background" alt={data.image.alt} style={{ backgroundImage:`url(${process.env.PUBLIC_URL + data.image.path}) ` }}>*/}
                        <Image
                            rounded
                            alt={data.Image.Alt}
                            src={process.env.PUBLIC_URL + data.Image.Path}
                        ></Image>
                        {/*</div>*/}
                        <div className="textarea-monument-card">
                            <h4 className="text-left monument-card-title">
                                {data.Title}
                            </h4>
                            <div className="d-flex justify-content-between">
                                <p className="col col-auto ptp-5">{data.Location}</p>
                                <Link
                                    to={process.env.PUBLIC_URL + data.Url}
                                    className="col col-auto btn btn-light border botton-card shadow rounded-pill mob-btn-card ml-3"
                                >
                                    {data.ButtonText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    }
};

MonumentCard.propTypes = {
    data: PropType.object,
};

export default MonumentCard;
