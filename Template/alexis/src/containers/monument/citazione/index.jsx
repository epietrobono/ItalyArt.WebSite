import PropTypes from "prop-types";

const MonumentCitContainer = ({contenuto, nSezione }) => {
    return (
        <div className="row justify-content-center">
            <div className="col col-auto border-citazione">
                <p>{contenuto.citazione[nSezione].testo}</p>
                <div className="title-citazione">
                    <h5>{contenuto.citazione[nSezione].citazione}</h5>
                </div>
            </div>
        </div>
    );
};

MonumentCitContainer.propTypes = {
    contenuto: PropTypes.shape({
        citazione: PropTypes.arrayOf(
          PropTypes.shape({
            testo: PropTypes.string,
            citazione: PropTypes.string,
          })
        )
      }),
      nSezione: PropTypes.number.isRequired,
    };

export default MonumentCitContainer;