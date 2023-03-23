import PropTypes from "prop-types";

const MonumentLeftImgContainer = ({ contenuto, nSezione }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          className="img-fluid"
          src={contenuto.testoADestra[nSezione].image.path}
          alt={contenuto.testoADestra[nSezione].image.alt}
        />
      </div>
      <div className="col-md-6">
        <h2>{contenuto.testoADestra[nSezione].titolo}</h2>
        <p>{contenuto.testoADestra[nSezione].testo}</p>
      </div>
    </div>
  );
};

MonumentLeftImgContainer.propTypes = {
    contenuto: PropTypes.shape({
      testoADestra: PropTypes.arrayOf(
        PropTypes.shape({
          titolo: PropTypes.string.isRequired,
          testo: PropTypes.string.isRequired, 
          image: PropTypes.shape({
            path: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
    nSezione: PropTypes.number.isRequired,
  };

export default MonumentLeftImgContainer;