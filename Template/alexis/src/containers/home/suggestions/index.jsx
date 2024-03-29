import { Link } from "react-router-dom";
import MonumentCard from "../../../components/monument-card";
import SuggestionsData from "../../../data/suggestions.json";

const SuggestionsContainer = () => {
    const data = SuggestionsData.it;
    return (
        <div className="container-ita-2">
        <div className="py-4 d-flex flex-column section-margin">
            <h2 className="text-center mob-h2">{data.title}</h2>
            <p className="text-center mob-p">{data.desc}</p>
            <div className="row justify-content-center sezione-card-monumenti r-gap">
                {
                    data.suggestions.map((val, key)=>{
                        return(
                            <div className="col-auto card-monumenti" key={key}>
                                <MonumentCard className="col col-auto" data={val}></MonumentCard>
                            </div>
                        );
                    })
                }
            </div>
            <Link
                to={process.env.PUBLIC_URL + "/monuments"}
                className=" border shadow rounded-pill mx-auto botton-suggestions"
            >
                {data.buttonText}
            </Link>
        </div>
        </div>
    );
};

export default SuggestionsContainer;