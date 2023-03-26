import PropTypes from "prop-types";

const MonumentRightImgContainer = ({ contenuto }) => {
  return (
    <div className="row">
      <div className="col-md-6">
      <div className="col-md-6">
        <h2>{contenuto.Titolo}</h2>
        <p>{contenuto.Testo}</p>
      </div>
        <img
          className="img-fluid"
          src={contenuto.Image.Path}
          alt={contenuto.Image.Alt}
        />
      </div>
    </div>
  );
};

MonumentRightImgContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentRightImgContainer;