import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SocialLogo from "../social-logo";

function RightUsefulLinks({ data }) {
    return (
        <ul>
            <div className="footer-empty-space"></div>
            <h3>{data.title}</h3>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/about"
                    }
                >
                    {data.about}
                </Link>
            </li>
            <li>
                <Link
                    to={
                        process.env.PUBLIC_URL + "/info"
                    }
                >
                    {data.info}
                </Link>
            </li>
            <li>
                <div className="row align-items-start justify-content-end">
                    <SocialLogo className="col-auto" social="instagram"></SocialLogo>
                    <SocialLogo className="col-auto" social="facebook"></SocialLogo>
                </div>
            </li>
        </ul>
    );
}

RightUsefulLinks.propTypes = {
    data: PropTypes.object,
};

export default RightUsefulLinks;