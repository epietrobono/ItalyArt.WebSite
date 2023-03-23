import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import {React,useEffect, useState }  from "react";

function CarouselModelsContainer() {
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
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/CarouselModel3D`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
    return (
        <div className="container-ita">
        <div className="carousel-models section-margin " id="tred-carousel">
            <Carousel indicators={false}>
                {
                    data?.map((monumento, key) => {
                        return (
                            <Carousel.Item key={key}>
                                <div className="row card-3d-carousel">
                                    <div className="col text-left carousel-info p-4  ">
                                        <h1 className="carousel-title mob-h2">{monumento.Title}</h1>
                                        <p className="carousel-desc-3d col-6 mob-p">{monumento.Desc}</p>
                                        <form action="#" className="form-search">
                                            <Link
                                                to={process.env.PUBLIC_URL + monumento.Url}
                                                className=" btn-light carousel-btn border botton-monument-carousel rounded-pill mx-2"
                                            >
                                                {monumento.Text}
                                            </Link>
                                        </form>
                                    </div>
                                    <Image rounded className="col carousel-image-3d " alt={monumento.Alt} src={process.env.PUBLIC_URL + monumento.Path}></Image>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
        </div>
    );
}

export default CarouselModelsContainer;