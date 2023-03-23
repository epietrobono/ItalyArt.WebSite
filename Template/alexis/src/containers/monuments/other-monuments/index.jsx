import PropTypes from "prop-types";
import MonumentPreview from "../../../components/monument-preview";

const OtherMonumentsContainer = ({title, monuments}) => {
    return (
        <div>
            <h4>{title}</h4>
            <div className="slider">
            <div className="row row-cols-10 lista-scorrevole">
                {
                    monuments.slice(0, 5).map((val, key) => {
                        return (
                            <div className=" width-card-slider" key={key}>
                                <MonumentPreview data={val} preview={false}></MonumentPreview>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    );
};

OtherMonumentsContainer.propTypes = {
    title: PropTypes.string,
    monuments: PropTypes.object,
}

export default OtherMonumentsContainer;