import CenterFooterLogo from "../../components/center-footer-logo";
import LeftUsefulLinks from "../../components/left-useful-links";
import RightUsefulLinks from "../../components/right-useful-links";
import {React,useEffect, useState }  from "react";

const Footer = () => {    
    const [data, setData] = useState({});
    useEffect(() => {
        async function getAjaxApiData() {
            const postBody = {
                Pagina:"Home",
                Lingua:"IT"
            };
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postBody)
            };
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/Footer`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
        
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <div className="footer-content row align-items-start justify-content-evenly">
                        <div className="left-useful-links text-start col-auto">
                            <LeftUsefulLinks data={data.Left}></LeftUsefulLinks>
                        </div>
                        <div className="center-footer-logo text-center col-auto">
                            <CenterFooterLogo data={data.Center}></CenterFooterLogo>
                        </div>
                        <div className="right-useful-links text-end col-auto">
                            <RightUsefulLinks data={data.Right}></RightUsefulLinks>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
