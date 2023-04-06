import PropTypes from "prop-types";

const MonumentTitleTextContainer = ({contenuto}) => {
    return (
        <section className={`${contenuto?.IsPink? "text-image-section":"text-image-section-white"}`}>
        <div className="row justify-content-center main-content container-ita-2 my-4">
            <div className="col col-auto">
                <h3>{contenuto.Titolo}</h3>
                <p>{contenuto.Testo}</p>
            </div>
        </div>
        </section>
    ); 
};

MonumentTitleTextContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentTitleTextContainer;