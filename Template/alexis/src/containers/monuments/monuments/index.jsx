import PropTypes from "prop-types";
import MonumentPreview from "../../../components/monument-preview";

const MonumentsContainer = ({title, monuments}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <h4>{title}</h4>
                    {
                        monuments.slice(0,3).map((val, key)=>{
                            return (
                                <div className="row" key={key}>
                                    <MonumentPreview data={val} titleLocation={true}></MonumentPreview>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

MonumentsContainer.propTypes = {
    title: PropTypes.string,
    monuments: PropTypes.object,
}

export default MonumentsContainer;