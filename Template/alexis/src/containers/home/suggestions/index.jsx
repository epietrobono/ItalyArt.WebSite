import SuggestionsData from "../../../data/suggestions.json";
import Suggestion from "../../../components/suggestion";
import { Link } from "react-router-dom";

const SuggestionsContainer = () => {
    const data = SuggestionsData.it;
    return (
        <div className="py-4 d-flex flex-column">
            <h2 className="text-center">{data.title}</h2>
            <p className="text-center">{data.desc}</p>
            <div className="row justify-content-center">
                {
                    data.suggestions.map((val, key)=>{
                        return(
                            <div className="col col-auto" key={key}>
                                <Suggestion className="col col-auto" data={val}></Suggestion>
                            </div>
                        );
                    })
                }
            </div>
            <Link
                to={process.env.PUBLIC_URL + "/suggestions"}
                className="btn btn-light border shadow rounded-pill mx-auto"
            >
                {data.buttonText}
            </Link>
        </div>
    );
};

export default SuggestionsContainer;