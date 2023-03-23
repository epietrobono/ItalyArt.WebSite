import PropTypes from "prop-types";

const MonumentTitleTextContainer = ({contenuto}) => {
    return (
        <div className="row justify-content-center">
            <div className="col col-auto">
                <h3>{contenuto.titolo}</h3>
                <p>{contenuto.testo}</p>
            </div>
        </div>
    ); 
};

MonumentTitleTextContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentTitleTextContainer;