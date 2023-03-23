import CenterFooterLogo from "../../components/center-footer-logo";
import LeftUsefulLinks from "../../components/left-useful-links";
import RightUsefulLinks from "../../components/right-useful-links";
import {React,useEffect, useState }  from "react";
import Api from "../../services/Api";

const Footer = () => {    
    const [FooterData, setFooterData] = useState({});
    const [isMounted12, setIsMounted12] = useState(false);
    
    useEffect(() => {
        console.log("entro in useEffects");
        setIsMounted12(true);
        Api.GetFooter().then((results) => {    
        console.log("esegue then");
        setFooterData(results);
      });
    }, []);
    
    if (!isMounted12) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
        
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <div className="footer-content row align-items-start justify-content-evenly">
                        <div className="left-useful-links text-start col-auto">
                            <LeftUsefulLinks data={FooterData.Left}></LeftUsefulLinks>
                        </div>
                        <div className="center-footer-logo text-center col-auto">
                            <CenterFooterLogo data={FooterData.Center}></CenterFooterLogo>
                        </div>
                        <div className="right-useful-links text-end col-auto">
                            <RightUsefulLinks data={FooterData.Right}></RightUsefulLinks>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
