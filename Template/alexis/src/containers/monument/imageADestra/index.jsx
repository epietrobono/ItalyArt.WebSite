import PropTypes from "prop-types";

const MonumentRightImgContainer = ({ contenuto }) => {
  return (
    <section className="row text-image-section ">
      <div className="margin-section-image-text d-flex">
        <div className="col-md-6">
          <h3>{contenuto.titolo}</h3>
          <p>{contenuto.testo}</p>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid image-text-section float-right"
            src={contenuto.image.path}
            alt={contenuto.image.alt}
          />
        </div>
      </div>
    </section>
  );
};

MonumentRightImgContainer.propTypes = {
    contenuto: PropTypes.object
}


export default MonumentRightImgContainer;