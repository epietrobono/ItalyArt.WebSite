import PropTypes from "prop-types";
import MonumentCard from "../../../components/monument-card";
import MonumentsData from "../../../data/map-monuments.json";

function GridContainer({nCols}) {
    const data = MonumentsData.it;
    return (
        <div className={"categories sezione-card-maps sezione-card-monumenti row row-cols-" + nCols + " justify-content-center mx-0"}>
            {
                data.monuments.map((val, key)=>{
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