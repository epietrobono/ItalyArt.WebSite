import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import SearchForm from "../../../components/search-form-newsletter";
import Api from "../../../services/Api";

const NewsletterContainer = () => {
    const [NewsletterContainerData, setNewsletterContainerData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetNewsletter()  
            setNewsletterContainerData(results);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    

    return (
        <div className="container-ita">
        {!isLoading && (
        <>
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
        </>
        )}
        </div>
    );
};

export default NewsletterContainer;