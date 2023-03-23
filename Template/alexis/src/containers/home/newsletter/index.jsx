import { Image } from "react-bootstrap";
import SearchForm from "../../../components/search-form";
import {React,useEffect, useState }  from "react";

const NewsletterContainer = () => {
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
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/Newsletter`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
    return (
        <div className="container-ita">
        <div className="newsletter row justify-content-center py-3 section-margin">
            <div className="col d-flex-news text-center">
                <h1>{data.Title}</h1>
                <p className="newsletter-desc">{data.Desc}</p>
                <SearchForm data={data} icon={"email-icon"}></SearchForm>
            </div>
            <div className="img-newsletter">
                <Image alt={data.Image.Alt} src={process.env.PUBLIC_URL + data.Image.Path}></Image>
            </div>
        </div>
        </div>
    );
};

export default NewsletterContainer;