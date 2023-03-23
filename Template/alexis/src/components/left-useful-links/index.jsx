import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LeftUsefulLinks({ data }) {
    return (
        <ul>
            <div className="footer-empty-space"></div>
            <h3>{data.title}</h3>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/"
                    }
                >
                    {data.home}
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/monuments"
                    }
                >
                    {data.monuments}
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/blog"
                    }
                >
                    {data.blog}
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/privacy"
                    }
                >
                    {data.privacy}
                </Link>
            </li>
        </ul>
    );
}

LeftUsefulLinks.propTypes = {
    data: PropTypes.object,
};

export default LeftUsefulLinks;