import PropTypes from "prop-types";

const MonumentRightImgContainer = ({ contenuto }) => {
  return (
    <div className="row">
      <div className="col-md-6">
      <div className="col-md-6">
        <h2>{contenuto.titolo}</h2>
        <p>{contenuto.testo}</p>
      </div>
        <img
          className="img-fluid"
          src={contenuto.image.path}
          alt={contenuto.image.alt}
        />
      </div>
    </div>
  );
};

MonumentRightImgContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentRightImgContainer;