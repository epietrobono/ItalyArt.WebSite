import MonumentCard from "../../../components/monument-card";
import ModelSuggestionsData from "../../../data/model-suggestions.json";

const ModelSuggestionsContainer = () => {
    const data = ModelSuggestionsData.it;
    return (
        <div className="container-ita">
        <div className="py-4 d-flex flex-column section-margin ">
            <h2 className="text-center">{data.title}</h2>
            <p className="text-center">{data.desc}</p>
            <div className="row justify-content-center">
                {
                    data.suggestions.map((val, key)=>{
                        return(
                            <div className="col col-auto width-3d-card" key={key}>
                                <MonumentCard data={val}></MonumentCard>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default ModelSuggestionsContainer;