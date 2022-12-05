import WhereToGoData from "../../../data/where-to-go.json";
import SearchForm from "../../../components/search-form";
import { Image } from "react-bootstrap";

const WhereToGoContainer = () => {
    const data = WhereToGoData.it;
    return (
        <div className="row where-to-go justify-content-center">
            <div className="col col-auto py-4">
                <h1 className="text-center">{data.title}</h1>
                <div className="row justify-content-center align-items-center">
                    <Image className="col mx-5" alt={data.image.alt} src={process.env.PUBLIC_URL + data.image.path}></Image>
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