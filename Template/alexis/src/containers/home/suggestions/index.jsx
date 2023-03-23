import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MonumentCard from "../../../components/monument-card";
import Api from "../../../services/Api";

const SuggestionsContainer = () => {
    const [SuggestionsContainerData, setSuggestionsContainerData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetMonuments360Home()
            setSuggestionsContainerData(results);
            console.log(SuggestionsContainerData)
            setIsLoading(false);
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.log(SuggestionsContainerData)
    // }, [SuggestionsContainerData]);
    

    return (
        <div className="container-ita-2">
        {!isLoading && (
            <>
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
        </>
        )}
        </div>
    );
};

export default SuggestionsContainer;