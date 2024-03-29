import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import CarouselMonumentsData from "../../../data/carousel-monuments.json";

function CarouselMonumentsContainer() {
    return (
        <div className="carousel-monuments section-margin" id="mon-carousel">
            <Carousel indicators={false}>
                {
                    CarouselMonumentsData.it.map((data, key) => {
                        return (
                            <Carousel.Item key={key}>
                                <div className="row mx-5 carousel-monuments-home">
                                    <div className="col text-left carousel-info  ">
                                        <h1 className="carousel-title">{data.title}</h1>
                                        <p className="carousel-desc">{data.desc}</p>
                                        <form action="#" className="form-search">
                                            <Link
                                                to={process.env.PUBLIC_URL + data.url}
                                                className="btn-light carousel-btn border botton-monument-carousel rounded-pill mx-2"
                                            >
                                                {data.text}
                                            </Link>
                                        </form>
                                    </div>
                                    <Image rounded className="col  image-home-carousel-360" alt={data.alt} src={process.env.PUBLIC_URL + data.path}></Image>
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