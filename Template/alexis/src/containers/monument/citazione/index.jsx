import PropTypes from "prop-types";

const MonumentCitContainer = ({contenuto}) => {
    return (
        <div className="row justify-content-center main-content container-ita-2">
            <div className="col col-auto border-citazione">
                <p>{contenuto.testo}</p>
                <div className="title-citazione">
                    <h6>{contenuto.titolo}</h6>
                </div>
            </div>
        </div>
    );
};

MonumentCitContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentCitContainer;