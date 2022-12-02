import NewsletterData from "../../../data/newsletter.json";
import { Link } from "react-router-dom";

const NewsletterContainer = () => {
    const data = NewsletterData.it;
    return (
        <div className="newsletter row justify-content-center py-5">
            <div className="col col-auto w-50">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                <form action="#" className="form-email">
                    <input
                        id="search"
                        className="col col-auto input-text border shadow rounded-pill mx-2 px-4 py-1 email-icon"
                        placeholder={data.placeholder}
                        aria-describedby="email-icon"
                        type="search"
                    />
                    <Link
                        to={process.env.PUBLIC_URL + data.url}
                        className="col col-auto btn btn-light border shadow rounded-pill mx-2"
                    >
                        {data.buttonText}
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default NewsletterContainer;