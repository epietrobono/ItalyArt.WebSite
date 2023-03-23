import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import {React,useEffect, useState }  from "react";

function CarouselMonumentsContainer() {
    
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
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/CarouselTour360`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
    
    return (
        <div className="carousel-monuments section-margin" id="mon-carousel">
            <Carousel indicators={false}>
                {
                    data?.map((monumento, key) => {
                        return (
                            <Carousel.Item key={key}>
                                <div className="row mx-5 carousel-monuments-home">
                                    <div className="col text-left carousel-info  ">
                                        <h1 className="carousel-title">{monumento.Title}</h1>
                                        <p className="carousel-desc">{monumento.Desc}</p>
                                        <form action="#" className="form-search">
                                            <Link
                                                to={process.env.PUBLIC_URL + monumento.Url}
                                                className="btn-light carousel-btn border botton-monument-carousel rounded-pill mx-2"
                                            >
                                                {monumento.Text}
                                            </Link>
                                        </form>
                                    </div>
                                    <Image rounded className="col  image-home-carousel-360" alt={monumento.Alt} src={process.env.PUBLIC_URL + monumento.Path}></Image>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default CarouselMonumentsContainer;