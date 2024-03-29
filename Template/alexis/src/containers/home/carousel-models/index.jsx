import { Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import CarouselModelsData from "../../../data/carousel-models.json";

function CarouselModelsContainer() {
    return (
        <div className="container-ita">
        <div className="carousel-models section-margin " id="tred-carousel">
            <Carousel indicators={false}>
                {
                    CarouselModelsData.it.map((data, key) => {
                        return (
                            <Carousel.Item key={key}>
                                <div className="row card-3d-carousel">
                                    <div className="col text-left carousel-info p-4  ">
                                        <h1 className="carousel-title mob-h2">{data.title}</h1>
                                        <p className="carousel-desc-3d col-6 mob-p">{data.desc}</p>
                                        <form action="#" className="form-search">
                                            <Link
                                                to={process.env.PUBLIC_URL + data.url}
                                                className=" btn-light carousel-btn border botton-monument-carousel rounded-pill mx-2"
                                            >
                                                {data.text}
                                            </Link>
                                        </form>
                                    </div>
                                    <Image rounded className="col carousel-image-3d " alt={data.alt} src={process.env.PUBLIC_URL + data.path}></Image>
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