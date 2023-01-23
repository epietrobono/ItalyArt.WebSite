import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MonumentSectionImg ({data}) {
    return (
        <div className="monument-section-element">
            <Link to={process.env.PUBLIC_URL + data.url}>
                <img
                    className="icon-main monument-section-element-img"
                    src={process.env.PUBLIC_URL + data.image}
                    alt="Icon"
                />
            </Link>
            <p className="text-center monument-section-element-text">{data.title}</p>
        </div>
    );
}

MonumentSectionImg.propTypes = {
    data: PropTypes.object
};

export default MonumentSectionImg;