import PropTypes from "prop-types";

const MonumentCitContainer = ({contenuto}) => {
    return (
        <section className={`${contenuto?.IsPink? "text-image-section":"text-image-section-white"}`}>
        <div className="row justify-content-center main-content container-ita-2">
            <div className="col col-auto border-citazione">
                <p>{contenuto.Testo}</p>
                <div className="title-citazione">
                    <h6>{contenuto.Titolo}</h6>
                </div>
            </div>
        </div>
        </section>
    );
};

MonumentCitContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentCitContainer;