import PropTypes from "prop-types";
import MonumentPreview from "../../../components/monument-preview";

const OtherMonumentsContainer = ({title, monuments}) => {
    return (
        <div>
            <h4>{title}</h4>
            <div className="row row-cols-10 justify-content-center">
                {
                    monuments.slice(0, 5).map((val, key) => {
                        return (
                            <div className="col col-2" key={key}>
                                <MonumentPreview data={val} preview={false}></MonumentPreview>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

OtherMonumentsContainer.propTypes = {
    title: PropTypes.string,
    monuments: PropTypes.object,
}

export default OtherMonumentsContainer;