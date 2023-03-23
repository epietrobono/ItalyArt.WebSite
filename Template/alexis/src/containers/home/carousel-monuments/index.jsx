import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Api from "../../../services/Api";
import {React,useEffect, useState }  from "react";

function CarouselMonumentsContainer() {
    const [carouselMonumentsContainerData, setcarouselMonumentsContainerData] = useState({});
    const [isMounted3, setIsMounted3] = useState(false);
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetCarouselModel360().then((results) => {    
            setIsMounted3(true);
        console.log("esegue then");
        setcarouselMonumentsContainerData(results);
      });
    }, []);
    
    if (!isMounted3) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
      
    return (
        <div className="carousel-monuments section-margin" id="mon-carousel">
            <Carousel indicators={false}>
                {
                    carouselMonumentsContainerData?.map((monumento, key) => {
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