import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LeftUsefulLinks({ data }) {
    return (
        <ul>
            <div className="footer-empty-space"></div>
            <h3>{data.Title}</h3>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/"
                    }
                >
                    {data.Home}
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/monuments"
                    }
                >
                    {data.Monuments}
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/blog"
                    }
                >
                    {data.Blog}
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/privacy"
                    }
                >
                    {data.Privacy}
                </Link>
            </li>
        </ul>
    );
}

LeftUsefulLinks.propTypes = {
    data: PropTypes.object,
};

export default LeftUsefulLinks;