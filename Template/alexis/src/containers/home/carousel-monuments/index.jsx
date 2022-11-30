import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import CarouselMonumentsData from "../../../data/carousel-monuments.json";

function CarouselMonumentsContainer() {
    return (
        <Carousel indicators={false}>
            {
                CarouselMonumentsData.it.map((data, key) => {
                    return (
                        <Carousel.Item key={key}>
                            <div className="row mx-5">
                                <div className="col text-left carousel-info p-4 m-4">
                                        <h1 className="carousel-title">{data.title}</h1>
                                        <p className="carousel-desc">{data.desc}</p>
                                        <form action="#" className="form-search">
                                            <Link
                                                to={process.env.PUBLIC_URL + data.url}
                                                className="btn btn-light carousel-btn border rounded-pill mx-2"
                                            >
                                                {data.text}
                                            </Link>
                                        </form>
                                </div>
                                <Image rounded className="col carousel-image m-4" alt={data.alt} src={process.env.PUBLIC_URL + data.path}></Image>
                            </div>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

export default CarouselMonumentsContainer;