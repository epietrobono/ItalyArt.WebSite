import PropTypes from "prop-types";
import MonumentCard from "../../../components/monument-card";

function GridContainer({nCols, monuments, isLoading}) {      
    let flexClass = "";
    let classColAuto="";
    if(!isLoading){
        flexClass = monuments.length < 4 ? "flex-container-monuments" : "";
        classColAuto= monuments?.length==1 ? "col-auto" : "col-auto-in";
    }
    return (
        <div className={`categories sezione-card-maps sezione-card-monumenti ${flexClass} row row-cols-${nCols} mx-0`}>
            {!isLoading &&
                monuments.map((val, key)=>{
                    return (
                        <div className={`col ${classColAuto} card-monumenti`} key={key}>
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