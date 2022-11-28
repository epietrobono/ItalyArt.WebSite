import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Icon ({path, image}) {
    return (
        <Link to={process.env.PUBLIC_URL + path}>
            <img
                className="icon-main"
                src={process.env.PUBLIC_URL + image}
                alt="Icon"
            />
        </Link>
    );
}

Icon.propTypes = {
    path: PropTypes.string,
    image: PropTypes.string,
};

export default Icon;
