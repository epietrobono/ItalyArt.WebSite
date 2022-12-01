import WhereToGoData from "../../data/where-to-go.json";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const WhereToGoContainer = () => {
    const data = WhereToGoData.it;
    return(
        <div className="d-flex flex-column justify-content-center where-to-go py-4">
            <h1 className="text-center">{data.title}</h1>
            <div className="row justify-content-center align-items-center">
                <Image className="col col-auto mx-5" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                <div className="col col-auto mx-5">
                    <h2>{data.subtitle}</h2>
                    <p className="text-wrap">{data.desc}</p>
                    <form action="#" className="form-search">
                        <input
                            id="search"
                            className="col col-auto input-text border shadow rounded-pill mx-2 px-4 py-1 search-map"
                            placeholder={data.placeholder}
                            aria-describedby="search-icon"
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
        </div>
    );
}

export default WhereToGoContainer;