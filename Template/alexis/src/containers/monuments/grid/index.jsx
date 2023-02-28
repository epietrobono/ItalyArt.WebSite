import PropTypes from "prop-types";
import MonumentCard from "../../../components/monument-card";

function GridContainer({nCols, monuments}) {
    return (
        <div className={"categories sezione-card-monumenti row row-cols-" + nCols + " mx-0"}>
            {
                monuments.map((val, key)=>{
                    return (
                        <div className="col col-auto card-monumenti" key={key}>
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
    monuments: PropTypes.object
};

export default GridContainer;