import PropTypes from "prop-types";
import FooterLogo from "../../components/footer-logo";

function CenterFooterLogo({ data }) {
    return (
        <div>
            <div className="center-footer-logo">
                <FooterLogo
                    image={`${process.env.PUBLIC_URL}/img/footer-logo.png`}
                />
                <p className="text-wrap">
                    {data.desc}
                </p>
            </div>
        </div>
    );
}

CenterFooterLogo.propTypes = {
    data: PropTypes.object,
};

export default CenterFooterLogo;