import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function CardWithButton ({data, right=false}) {
    if (right) {
        return (
            <div className="row justify-content-around mx-5" >
                <div className="col col-auto">
                    <Image rounded className="shadow" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                </div>
                <div className="col col-4">
                    <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                    <form action={data.url}>
                        <Link
                            to={process.env.PUBLIC_URL + data.url}
                            className="col col-auto btn btn-light border botton-card ms-2"
                        >
                            {data.buttonText}
                        </Link>
                    </form>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row justify-content-around mx-5" >
                <div className="col col-4">
                    <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                    <form action={data.url}>
                        <Link
                            to={process.env.PUBLIC_URL + data.url}
                            className="col col-auto btn btn-light border botton-card rounded-pill ms-2"
                        >
                            {data.buttonText}
                        </Link>
                    </form>
                </div>
                <div className="col col-auto">
                    <Image rounded className="shadow" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                </div>
            </div>
        );
    }
}

CardWithButton.propTypes = {
    data: PropTypes.object,
    right: PropTypes.bool 
};

export default CardWithButton;