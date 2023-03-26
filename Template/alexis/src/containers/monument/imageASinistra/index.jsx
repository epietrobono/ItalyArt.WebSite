import PropTypes from "prop-types";

const MonumentLeftImgContainer = ({ contenuto }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          className="img-fluid"
          src={contenuto.Image.Path}
          alt={contenuto.Image.Alt}
        />
      </div>
      <div className="col-md-6">
        <h2>{contenuto.Titolo}</h2>
        <p>{contenuto.Testo}</p>
      </div>
    </div>
  );
};

MonumentLeftImgContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentLeftImgContainer;