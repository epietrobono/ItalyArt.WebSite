import PropTypes from "prop-types";

const MonumentTextContainer = ({contenuto}) => {
    return (
        <div className="row justify-content-center">
            <div className="col col-auto">
                <p className="mb-5">{contenuto.Testo}</p>
            </div>
        </div>
    );
};

MonumentTextContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentTextContainer;