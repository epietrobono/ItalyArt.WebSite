import CenterFooterLogo from "../../components/center-footer-logo";
import LeftUsefulLinks from "../../components/left-useful-links";
import RightUsefulLinks from "../../components/right-useful-links";

const Footer = () => {
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <div className="footer-content row align-items-start justify-content-evenly">
                        <div className="left-useful-links text-start col-auto">
                            <LeftUsefulLinks></LeftUsefulLinks>
                        </div>
                        <div className="center-footer-logo text-center col-auto">
                            <CenterFooterLogo></CenterFooterLogo>
                        </div>
                        <div className="right-useful-links text-end col-auto">
                            <RightUsefulLinks></RightUsefulLinks>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
