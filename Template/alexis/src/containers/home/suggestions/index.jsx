import { Link } from "react-router-dom";
import MonumentCard from "../../../components/monument-card";
import {React,useEffect, useState }  from "react";
import Api from "../../../services/Api";

const SuggestionsContainer = () => {
    const [SuggestionsContainerData, setSuggestionsContainerData] = useState({});
    const [isMounted9, setIsMounted9] = useState(false);
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetMonuments360Home().then((results) => {    
            setIsMounted9(true);
        console.log("esegue then");
        setSuggestionsContainerData(results);
      });
    }, []);
    
    if (!isMounted9) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
    return (
        <div className="container-ita-2">
        <div className="py-4 d-flex flex-column section-margin">
            <h2 className="text-center mob-h2">{SuggestionsContainerData.Title}</h2>
            <p className="text-center mob-p">{SuggestionsContainerData.Desc}</p>
            <div className="row justify-content-center sezione-card-monumenti r-gap">
                {
                    SuggestionsContainerData.Suggestions.map((val, key)=>{
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
                {SuggestionsContainerData.ButtonText}
            </Link>
        </div>
        </div>
    );
};

export default SuggestionsContainer;