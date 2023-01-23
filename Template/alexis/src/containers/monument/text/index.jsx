import PropTypes from "prop-types";

const MonumentTextContainer = ({contenuto}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <p>{contenuto.testo}</p>
                </div>
            </div>
        </div>
    );
};

MonumentTextContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentTextContainer;