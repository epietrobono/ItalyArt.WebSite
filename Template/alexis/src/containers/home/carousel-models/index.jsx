import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Api from "../../../services/Api";
import {React,useEffect, useState }  from "react";

function CarouselModelsContainer() {    
const [carouselModelContainerData, setcarouselModelContainerData] = useState({});
const [isMounted2, setIsMounted2] = useState(false);

useEffect(() => {
    console.log("entro in useEffects");
    setIsMounted2(true);
    Api.GetCarouselModel3D().then((results) => {    
    console.log("esegue then");
    setcarouselModelContainerData(results);
  });
}, []);

if (!isMounted2) {
    return null; // non renderizzare il componente fino a quando non è montato
  }
    return (
        <div className="container-ita">
        <div className="carousel-models section-margin " id="tred-carousel">
            <Carousel indicators={false}>
                {
                    carouselModelContainerData?.map((monumento, key) => {
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