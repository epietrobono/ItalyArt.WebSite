import MonumentCard from "../../../components/monument-card";
import React, { useEffect, useState } from "react";
import Api from "../../../services/Api";

const ModelSuggestionsContainer = () => {
    const [modelSuggestionsContainerData, setmodelSuggestionsContainerData] = useState({});
    const [isMounted6, setIsMounted6] = useState(false);
    
    useEffect(() => {
        console.log("entro in useEffects");
        setIsMounted6(true);
        Api.GetMonuments3DHome().then((results) => {    
        console.log("esegue then");
        setmodelSuggestionsContainerData(results);
      });
    }, []);
    
    if (!isMounted6) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    
    return (
        <div className="container-ita">
        <div className="py-4 d-flex flex-column section-margin ">
            <h2 className="text-center mob-h2">{modelSuggestionsContainerData.Title}</h2>
            <p className="text-center mob-p">{modelSuggestionsContainerData.Desc}</p>
            <div className="row justify-content-center sezione-card-monumenti r-gap">
                {
                    modelSuggestionsContainerData.Suggestions.map((val, key)=>{
                        return(
                            <div className="col col-auto width-3d-card card-monumenti" key={key}>
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