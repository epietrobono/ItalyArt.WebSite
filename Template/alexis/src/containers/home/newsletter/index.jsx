import NewsletterData from "../../../data/newsletter.json";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import SearchForm from "../../../components/search-form";

const NewsletterContainer = () => {
    const data = NewsletterData.it;
    return (
        <div className="newsletter row justify-content-center py-5">
            <div className="col col-auto w-50 text-center">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                <SearchForm data={data} icon={"email-icon"}></SearchForm>
            </div>
            <div className="col col-3">
                <Image alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
            </div>
        </div>
    );
};

export default NewsletterContainer;