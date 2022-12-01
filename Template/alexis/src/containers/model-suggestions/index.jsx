import ModelSuggestionsData from "../../data/model-suggestions.json";
import Suggestion from "../../components/suggestion";
import { Link } from "react-router-dom";

const ModelSuggestionsContainer = () => {
    const data = ModelSuggestionsData.it;
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
        </div>
    );
};

export default ModelSuggestionsContainer;