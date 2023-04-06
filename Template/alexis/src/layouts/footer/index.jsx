import React, { useEffect, useState } from "react";
import CenterFooterLogo from "../../components/center-footer-logo";
import LeftUsefulLinks from "../../components/left-useful-links";
import RightUsefulLinks from "../../components/right-useful-links";
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
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="col-sm-12">
                    {!isLoading && (
                        <>
                            <div className="footer-content row align-items-start justify-content-evenly">
                                <div className="left-useful-links text-start col-auto">
                                    <LeftUsefulLinks
                                        data={FooterData.Left}
                                    ></LeftUsefulLinks>
                                </div>
                                <div className="center-footer-logo text-center col-auto">
                                    <CenterFooterLogo
                                        data={FooterData.Center}
                                    ></CenterFooterLogo>
                                </div>
                                <div className="right-useful-links text-end col-auto">
                                    <RightUsefulLinks
                                        data={FooterData.Right}
                                    ></RightUsefulLinks>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <p className="dati-aziendali-footer">
                ItalyArt S.r.l.s. | Piazza Camerino 15 - Roma | P.Iva:
                14324751008
            </p>
        </footer>
    );
};

export default Footer;
