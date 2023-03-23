import PropTypes from "prop-types";

const MonumentTextContainer = ({contenuto, nSection}) => {
    return (
        <div className="row justify-content-center">
            <div className="col col-auto">
                <h3>{contenuto.testoConTitolo.titolo}</h3>
                <p>{contenuto.testoConTitolo.testo}</p>
            </div>
        </div>
    );
};

MonumentTextContainer.propTypes = {
    contenuto: PropTypes.shape({
        testoConTitolo: PropTypes.arrayOf(
          PropTypes.shape({
            titolo: PropTypes.string,
            testo: PropTypes.string,
          })
        )
      }),      
      nSezione: PropTypes.number.isRequired,
    };


export default MonumentTextContainer;