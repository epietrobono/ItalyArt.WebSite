import { Link } from "react-router-dom";
import MonumentCard from "../../../components/monument-card";
import {React,useEffect, useState }  from "react";

const SuggestionsContainer = () => {
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
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/Monuments360Home`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
    return (
        <div className="container-ita-2">
        <div className="py-4 d-flex flex-column section-margin">
            <h2 className="text-center mob-h2">{data.Title}</h2>
            <p className="text-center mob-p">{data.Desc}</p>
            <div className="row justify-content-center sezione-card-monumenti r-gap">
                {
                    data.Suggestions.map((val, key)=>{
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
                {data.ButtonText}
            </Link>
        </div>
        </div>
    );
};

export default SuggestionsContainer;