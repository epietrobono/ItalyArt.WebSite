import MonumentCard from "../../../components/monument-card";
import React, { useEffect, useState } from "react";

const ModelSuggestionsContainer = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getAjaxApiData() {
            const postBody = {
                Pagina:"Home",
                Lingua:"IT"
            };
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postBody)
            };
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/Monuments3DHome`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
    return (
        <div className="container-ita">
        <div className="py-4 d-flex flex-column section-margin ">
            <h2 className="text-center mob-h2">{data.Title}</h2>
            <p className="text-center mob-p">{data.Desc}</p>
            <div className="row justify-content-center sezione-card-monumenti r-gap">
                {
                    data.Suggestions.map((val, key)=>{
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