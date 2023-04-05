import PropTypes from "prop-types";
import MonumentCard from "../../../components/monument-card";

function GridContainer({nCols, monuments, isLoading}) {
    let flexClass = "";
    if(!isLoading){
        flexClass = monuments.length < 4 ? "flex-container-monuments" : "";
    }
    return (
        <div className={`categories sezione-card-maps sezione-card-monumenti ${flexClass} row row-cols-${nCols} mx-0`}>
            {!isLoading &&
                monuments.map((val, key)=>{
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
    monuments: PropTypes.array,
    isLoading: PropTypes.bool
};

export default GridContainer;