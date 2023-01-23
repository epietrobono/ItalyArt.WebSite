import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CategoryIcon ({data}) {
    return (
        <div className="d-flex-icon-cat">
            <Link to={process.env.PUBLIC_URL + data.url}>
                <img
                    className="icon-main icon-cat"
                    src={process.env.PUBLIC_URL + data.path}
                    alt="Icon"
                />
            </Link>
            <p className="text-center">{data.name}</p>
        </div>
    );
}

CategoryIcon.propTypes = {
    data: PropTypes.object,
};

export default CategoryIcon;