import { Image } from "react-bootstrap";
import SearchForm from "../../../components/search-form";
import WhereToGoData from "../../../data/where-to-go.json";

const WhereToGoContainer = () => {
    const data = WhereToGoData.it;
    return (
        <div className="row where-to-go justify-content-center section-margin delete-margin">
            <div className="col col-auto py-5">
                <h1 className="text-center">{data.title}</h1>
                <div className="row justify-content-center align-items-center d-flex sezione-dove-andare">
                    <Image className="col mx-5 mappa-italia" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                    <div className="col col-5 mx-5">
                        <div className="where-to-go-form">
                            <h2>{data.subtitle}</h2>
                            <p className="text-wrap">{data.desc}</p>
                            <SearchForm data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhereToGoContainer;