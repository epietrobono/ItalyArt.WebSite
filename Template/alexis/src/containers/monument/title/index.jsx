import PropTypes from "prop-types";

const MonumentTitleContainer = ({conentuto}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <h4>{conentuto}</h4>
                </div>
            </div>
        </div>
    );
};

MonumentTitleContainer.propTypes = {
    conentuto: PropTypes.string
}

export default MonumentTitleContainer;