import PropTypes from "prop-types";
import MonumentCard from "../../../components/monument-card";
import {React,useEffect, useState }  from "react";
import Api from "../../../services/Api";

function GridContainer({nCols}) {
    const [GridContainerData, setGridContainerData] = useState({});
    const [isMounted10, setIsMounted10] = useState(false);
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetMonuments().then((results) => {    
            setIsMounted10(true);
        console.log("esegue then");
        setGridContainerData(results);
      });
    }, []);
    
    if (!isMounted10) {
        return null; // non renderizzare il componente fino a quando non è montato
      }
      
    return (
        <div className={"categories sezione-card-maps sezione-card-monumenti row row-cols-" + nCols + " justify-content-center mx-0"}>
            {
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