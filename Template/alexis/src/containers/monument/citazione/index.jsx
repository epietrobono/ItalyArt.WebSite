import PropTypes from "prop-types";

const MonumentCitContainer = ({contenuto}) => {
    return (
        <div className="row justify-content-center">
            <div className="col col-auto border-citazione">
                <p>{contenuto.Testo}</p>
                <div className="title-citazione">
                    <h5>{contenuto.Titolo}</h5>
                </div>
            </div>
        </div>
    );
};

MonumentCitContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentCitContainer;