import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LeftUsefulLinks({ data }) {
    return (
        <ul>
            <div className="footer-empty-space"></div>
            <li className="footer-link">
                <Link to={process.env.PUBLIC_URL + "/"}>{data.Home}</Link>
            </li>
            <li className="footer-link">
                <Link to={process.env.PUBLIC_URL + "/monuments"}>
                    {data.Monuments}
                </Link>
            </li>
            <li className="footer-link">
                <Link to={process.env.PUBLIC_URL + "/blog"}>{data.Blog}</Link>
            </li>
            {/* <li className="footer-link">
                <Link to={process.env.PUBLIC_URL + "/privacy"}>
                    {data.Privacy}
                </Link>
            </li> */}
        </ul>
    );
}

LeftUsefulLinks.propTypes = {
    data: PropTypes.object,
};

export default LeftUsefulLinks;
