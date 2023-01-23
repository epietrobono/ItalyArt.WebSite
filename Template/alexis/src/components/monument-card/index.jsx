import PropType from "prop-types";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const MonumentCard = ({ data }) => {
    return (
        <div className="shadow rounded p-2">
            <Image rounded className="img-monumenty-card" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
            <div className="textarea-monument-card">
                <h4 className="text-left">{data.title}</h4>
                <div className="d-flex justify-content-between">
                    <p className="col col-auto">{data.location}</p>
                    <Link
                        to={process.env.PUBLIC_URL + data.url}
                        className="col col-auto btn btn-light border botton-card shadow rounded-pill"
                    >
                        {data.buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

MonumentCard.propTypes = {
    data: PropType.object,
}

export default MonumentCard;