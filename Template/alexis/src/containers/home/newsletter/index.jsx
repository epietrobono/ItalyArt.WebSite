import { Image } from "react-bootstrap";
import SearchForm from "../../../components/search-form";
import {React,useEffect, useState }  from "react";
import Api from "../../../services/Api";

const NewsletterContainer = () => {
    const [NewsletterContainerData, setNewsletterContainerData] = useState({});
    const [isMounted8, setIsMounted8] = useState(false);
    
    useEffect(() => {
        console.log("entro in useEffects");
        setIsMounted8(true);
        Api.GetNewsletter().then((results) => {    
        console.log("esegue then");
        setNewsletterContainerData(results);
      });
    }, []);
    
    if (!isMounted8) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    return (
        <div className="container-ita">
        <div className="newsletter row justify-content-center py-3 section-margin">
            <div className="col d-flex-news text-center">
                <h1>{NewsletterContainerData.Title}</h1>
                <p className="newsletter-desc">{NewsletterContainerData.Desc}</p>
                <SearchForm data={NewsletterContainerData} icon={"email-icon"}></SearchForm>
            </div>
            <div className="img-newsletter">
                <Image alt={NewsletterContainerData.Image.Alt} src={process.env.PUBLIC_URL + NewsletterContainerData.Image.Path}></Image>
            </div>
        </div>
        </div>
    );
};

export default NewsletterContainer;