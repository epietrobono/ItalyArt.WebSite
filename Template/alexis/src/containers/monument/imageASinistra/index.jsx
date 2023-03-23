import PropTypes from "prop-types";

const MonumentLeftImgContainer = ({ contenuto }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          className="img-fluid"
          src={contenuto.image.path}
          alt={contenuto.image.alt}
        />
      </div>
      <div className="col-md-6">
        <h2>{contenuto.titolo}</h2>
        <p>{contenuto.testo}</p>
      </div>
    </div>
  );
};

MonumentLeftImgContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentLeftImgContainer;