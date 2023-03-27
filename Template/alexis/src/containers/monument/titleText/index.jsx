import PropTypes from "prop-types";

const MonumentTitleTextContainer = ({contenuto}) => {
    return (
        <div className="row justify-content-center main-content container-ita-2 my-4">
            <div className="col col-auto">
                <h3>{contenuto.Titolo}</h3>
                <p>{contenuto.Testo}</p>
            </div>
        </div>
    ); 
};

MonumentTitleTextContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentTitleTextContainer;