import { Link } from "react-router-dom";
import MonumentCard from "../../../components/monument-card";
import SuggestionsData from "../../../data/suggestions.json";

const SuggestionsContainer = () => {
    const data = SuggestionsData.it;
    return (
        <div className="py-4 d-flex flex-column section-margin">
            <h2 className="text-center">{data.title}</h2>
            <p className="text-center">{data.desc}</p>
            <div className="row justify-content-center">
                {
                    data.suggestions.map((val, key)=>{
                        return(
                            <div className="col col-auto" key={key}>
                                <MonumentCard className="col col-auto" data={val}></MonumentCard>
                            </div>
                        );
                    })
                }
            </div>
            <Link
                to={process.env.PUBLIC_URL + "/suggestions"}
                className=" border shadow rounded-pill mx-auto botton-suggestions"
            >
                {data.buttonText}
            </Link>
        </div>
    );
};

export default SuggestionsContainer;