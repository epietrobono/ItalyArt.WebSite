import { Image } from "react-bootstrap";
import SearchForm from "../../../components/search-form";
import WhereToGoData from "../../../data/where-to-go.json";

const WhereToGoContainer = () => {
    const data = WhereToGoData.it;
    return (
        <div className="news delete-margin">
        <div className="container-ita">
        <div className="row where-to-go justify-content-center section-margin ">
            <div className="col col-auto py-5">
                <h1 className="text-center mob-h2">{data.title}</h1>
                <div className="row justify-content-center align-items-center d-flex sezione-dove-andare">
                    <Image className="col mx-6 mappa-italia" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
                    <div className="col col-6 mx-6">
                        <div className="where-to-go-form ">
                            <h2 className="mob-h2">{data.subtitle}</h2>
                            <p className="text-wrap mob-p">{data.desc}</p>
                            <div className="mob-none" >
                                <SearchForm data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 mob-cerca">
                    <SearchForm data={data} />
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default WhereToGoContainer;