import PropType from "prop-types";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = ({ data }) => {
    return (
        <div className="p-2">
            <Image rounded alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
            <h4 className="text-left mt-3">{data.title}</h4>
            <p>{data.desc}</p>
            <div>
                <Link
                    to={process.env.PUBLIC_URL + data.url}
                    className="btn btn-light border shadow rounded-pill"
                >
                    {data.buttonText}
                </Link>
            </div>
        </div>
    );
};

News.propTypes = {
    data: PropType.object,
}

export default News;