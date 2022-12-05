import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

function Card ({data, right=false}) {
    if (right) {
        return (
            <div className="row justify-content-around mx-5" >
                <div className="col col-auto">
                    <Image rounded className="shadow" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                </div>
                <div className="col col-4">
                    <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row justify-content-around mx-5" >
                <div className="col col-4">
                    <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                </div>
                <div className="col col-auto">
                    <Image rounded className="shadow" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    data: PropTypes.object,
    right: PropTypes.bool 
};

export default Card;