import PropTypes from "prop-types";
import MonumentSectionImg from "../../../components/monument-section-img";

const MonumentTextContainer = ({monument}) => {
    return (
        <div className="row monument-section-bar">
            <div className="row">
                <h4>{monument.titoloSezione}</h4>
            </div>
            <div className="row mt-2">
                {
                    monument.sezioni.map((sezione, index) => {
                            return (
                                <div className="col-2" key={index}>
                                    <MonumentSectionImg data={sezione}></MonumentSectionImg>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
};

MonumentTextContainer.propTypes = {
    monument: PropTypes.object
}

export default MonumentTextContainer;