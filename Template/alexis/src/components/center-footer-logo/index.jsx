import PropTypes from "prop-types";
import FooterLogo from "../../components/footer-logo";
import SocialLogo from "../social-logo";

function CenterFooterLogo({ data }) {
    return (
        <div>
            <div className="center-footer-logo">
                <FooterLogo
                    image={`${process.env.PUBLIC_URL}/img/footer-logo.png`}
                />
                <p>{data.Desc}</p>
            </div>
            <div className="row align-items-start justify-content-center mt-1">
                <SocialLogo
                    className="col-auto"
                    social="instagram"
                ></SocialLogo>
                <SocialLogo className="col-auto" social="facebook"></SocialLogo>
            </div>
        </div>
    );
}

CenterFooterLogo.propTypes = {
    data: PropTypes.object,
};

export default CenterFooterLogo;
