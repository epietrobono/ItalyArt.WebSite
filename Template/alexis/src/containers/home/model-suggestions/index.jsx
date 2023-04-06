import React, { useEffect, useState } from "react";
import MonumentCard from "../../../components/monument-card";
import Api from "../../../services/Api";

const ModelSuggestionsContainer = () => {
    const [modelSuggestionsContainerData, setmodelSuggestionsContainerData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetMonuments3DHome()
            setmodelSuggestionsContainerData(results);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    
if(!isLoading && modelSuggestionsContainerData.Suggestions.lenght > 0){    
    const classColAuto= modelSuggestionsContainerData.Suggestions?.length==1 ? "col-auto" : "col-auto-in";
        return (
            <div className="container-ita">
            <div className="py-4 d-flex flex-column section-margin ">
                <h2 className="text-center mob-h2">{modelSuggestionsContainerData.Title}</h2>
                <p className="text-center mob-p">{modelSuggestionsContainerData.Desc}</p>
                <div className="row justify-content-center sezione-card-monumenti r-gap">
                    {!isLoading && modelSuggestionsContainerData.Suggestions.lenght > 0 &&
                        modelSuggestionsContainerData.Suggestions.map((val, key)=>{
                            return(
                                <div className={`col ${classColAuto} card-monumenti`} key={key}>
                                    <MonumentCard data={val}></MonumentCard>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            </div>
        );
    }else
    {
        return null;
    }
};

export default ModelSuggestionsContainer;