import CenterFooterLogo from "../../components/center-footer-logo";
import LeftUsefulLinks from "../../components/left-useful-links";
import RightUsefulLinks from "../../components/right-useful-links";
import FooterLinksData from "../../data/footer-links.json";

const Footer = () => {
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <div className="footer-content row align-items-start justify-content-evenly">
                        <div className="left-useful-links text-start col-auto">
                            <LeftUsefulLinks data={FooterLinksData.it.left}></LeftUsefulLinks>
                        </div>
                        <div className="center-footer-logo text-center col-auto">
                            <CenterFooterLogo data={FooterLinksData.it.center}></CenterFooterLogo>
                        </div>
                        <div className="right-useful-links text-end col-auto">
                            <RightUsefulLinks data={FooterLinksData.it.right}></RightUsefulLinks>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
