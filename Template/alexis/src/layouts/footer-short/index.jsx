import React, { useEffect, useState } from "react";
import CenterFooterLogo from "../../components/center-footer-logo";
import LeftUsefulLinks from "../../components/left-useful-links";
import RightUsefulLinks from "../../components/right-useful-links";
import Api from "../../services/Api";
import SocialLogo from "../../components/social-logo";

const Footer = () => {
    const [FooterData, setFooterData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetFooter();
            setFooterData(results);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <footer className="footer-area reveal-footer footer-area-short border-top-style">
            {!isLoading && (
                <div className="row footer-content row align-items-start justify-content-evenly">
                    <div className="col-auto">&nbsp;</div>
                    <div className="col-auto">&nbsp;</div>
                    <div className="col-auto">
                        <p>
                            {FooterData.TextDataCompany}ItalyArt S.r.l.s. |
                            Piazza Camerino 15 - Roma | P.Iva: 14324751008
                        </p>
                    </div>
                    <div className="row col-auto">
                        <SocialLogo
                            className="col-auto"
                            social="instagram"
                        ></SocialLogo>
                        <SocialLogo
                            className="col-auto"
                            social="facebook"
                        ></SocialLogo>
                    </div>
                    <div className="col-auto">&nbsp;</div>
                    <div className="col-auto">&nbsp;</div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
