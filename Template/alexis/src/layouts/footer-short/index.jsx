import React, { useEffect, useState } from "react";
import SocialLogo from "../../components/social-logo";
import Api from "../../services/Api";

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
                <div className="row footer-content row align-items-center justify-content-center">
                    {/* <div className="col-auto">&nbsp;</div>
                    <div className="col-auto">&nbsp;</div> */}
                    <div className="col-auto">
                        <p>{FooterData.TextDataCompany}</p>
                    </div>
                    <div className="row col-auto">
                        <SocialLogo
                            className="w-45"
                            social="instagram"
                        ></SocialLogo>
                        <SocialLogo
                            className="w-45"
                            social="facebook"
                        ></SocialLogo>
                    </div>
                    {/* <div className="col-auto">&nbsp;</div>
                    <div className="col-auto">&nbsp;</div> */}
                </div>
            )}
        </footer>
    );
};

export default Footer;
