import PropTypes from "prop-types";

const MonumentTitleContainer = ({contenuto}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <h4>{contenuto.titolo}</h4>
                </div>
            </div>
        </div>
    );
};

MonumentTitleContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentTitleContainer;