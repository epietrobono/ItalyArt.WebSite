import PropType from "prop-types";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = ({ data }) => {
    return (
        <div className="p-2" id={data?.Id}>
            <Image rounded alt={data?.Image?.Alt} src={process.env.PUBLIC_URL + data?.Image?.Path}></Image>
            <h4 className="text-left mt-3 mob-h2">{data?.Title}</h4>
            <p className="mob-p">{data?.Desc}</p>
            <div>
                <Link
                    to={process.env.PUBLIC_URL + data?.Url}
                    className="btn btn-light border shadow rounded-pill"
                >
                    {data?.ButtonText}
                </Link>
            </div>
        </div>
    );
};

News.propTypes = {
    data: PropType.object,
}

export default News;