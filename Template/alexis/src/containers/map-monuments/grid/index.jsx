import PropTypes from "prop-types";
import MonumentCard from "../../../components/monument-card";
import {React,useEffect, useState }  from "react";

function GridContainer({nCols}) {
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
            const response = await fetch(`http://treppiweb-002-site1.htempurl.com/api/Monuments`, settings);
            const responseJson = await response.json();
            setData(responseJson.results);
        }

        getAjaxApiData();
        }, []);
    return (
        <div className={"categories sezione-card-maps sezione-card-monumenti row row-cols-" + nCols + " justify-content-center mx-0"}>
            {
                data.Monuments.map((val, key)=>{
                    return (
                        <div className="col col-auto card-monumenti monumenti-map" key={key}>
                            <MonumentCard data={val}></MonumentCard>
                        </div>
                    )
                })
            }
        </div>
    );
}

GridContainer.propTypes = {
    nCols: PropTypes.number,
};

export default GridContainer;