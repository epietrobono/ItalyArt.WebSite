import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SocialLogo = ({ className, social }) => {
    if (social === "instagram") {
        return (
            <div className={className}>
                <Link to={process.env.PUBLIC_URL + "/#instagram"}>
                    <img
                        className="social-logo"
                        src={
                            process.env.PUBLIC_URL +
                            "/img/icons/instagram-logo.png"
                        }
                        alt="Logo"
                    />
                </Link>
            </div>
        );
    } else if (social === "facebook") {
        return (
            <div className={className}>
                <Link to={process.env.PUBLIC_URL + "/#facebook"}>
                    <img
                        className="social-logo"
                        src={
                            process.env.PUBLIC_URL +
                            "/img/icons/facebook-logo.png"
                        }
                        alt="Logo"
                    />
                </Link>
            </div>
        );
    }
    return <div></div>;
};

SocialLogo.propTypes = {
    social: PropTypes.string,
    className: PropTypes.string,
};

export default SocialLogo;
