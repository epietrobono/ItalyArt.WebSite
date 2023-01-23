import { Image } from "react-bootstrap";
import SearchForm from "../../../components/search-form";
import NewsletterData from "../../../data/newsletter.json";

const NewsletterContainer = () => {
    const data = NewsletterData.it;
    return (
        <div className="newsletter row justify-content-center py-3 section-margin">
            <div className="col col-auto d-flex-news text-center">
                <h1>{data.title}</h1>
                <p className="newsletter-desc">{data.desc}</p>
                <SearchForm data={data} icon={"email-icon"}></SearchForm>
            </div>
            <div className="img-newsletter">
                <Image alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
            </div>
        </div>
    );
};

export default NewsletterContainer;