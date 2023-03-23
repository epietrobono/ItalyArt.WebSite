import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MonumentCard from "../../../components/monument-card";
import Api from "../../../services/Api";

function GridContainer({nCols}) {
    const [GridContainerData, setGridContainerData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            const results = await Api.GetMonuments()  
            setGridContainerData(results);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    
      
    return (
        <div className={"categories sezione-card-maps sezione-card-monumenti row row-cols-" + nCols + " justify-content-center mx-0"}>
            { !isLoading && 
                GridContainerData.Monuments.map((val, key)=>{
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