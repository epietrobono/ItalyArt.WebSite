import PropTypes from "prop-types";

const MonumentRightImgContainer = ({ contenuto, nSezione }) => {
  return (
    <div className="row">
      <div className="col-md-6">
      <div className="col-md-6">
        <h2>{contenuto.testoASinistra[nSezione].titolo}</h2>
        <p>{contenuto.testoASinistra[nSezione].testo}</p>
      </div>
        <img
          className="img-fluid"
          src={contenuto.testoASinistra[nSezione].image.path}
          alt={contenuto.testoASinistra[nSezione].image.alt}
        />
      </div>
    </div>
  );
};

MonumentRightImgContainer.propTypes = {
  contenuto: PropTypes.shape({
    testoASinistra: PropTypes.arrayOf(
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

export default MonumentRightImgContainer;