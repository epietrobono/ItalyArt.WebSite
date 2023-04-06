import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RightUsefulLinks({ data }) {
    return (
        <ul>
            <div className="footer-empty-space"></div>
            <li className="footer-link">
                <Link to={process.env.PUBLIC_URL + "/about"}>{data.About}</Link>
            </li>
            <li className="footer-link">
                <Link to={process.env.PUBLIC_URL + "/info"}>{data.Info}</Link>
            </li>
        </ul>
    );
}

RightUsefulLinks.propTypes = {
    data: PropTypes.object,
};

export default RightUsefulLinks;
