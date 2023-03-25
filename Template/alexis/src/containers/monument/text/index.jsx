import PropTypes from "prop-types";

const MonumentTextContainer = ({contenuto}) => {
    return (
        <div className="row justify-content-center main-content container-ita-2">
            <div className="col col-auto">
                <p className="mb-5">{contenuto.testo}</p>
            </div>
        </div>
    );
};

MonumentTextContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentTextContainer;