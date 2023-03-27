import PropTypes from "prop-types";

const MonumentLeftImgContainer = ({ contenuto }) => {
  return (
    <section className=" text-image-section ">
      <div className="margin-section-image-text d-flex">
        <div className="col-md-6">
          <img
            className="img-fluid image-text-section float-left"
            src={contenuto?.Image?.Path}
            alt={contenuto?.Image?.Alt}
          />
        </div>
        <div className="col-md-6">
          <h3>{contenuto?.Titolo}</h3>
          <p>{contenuto?.Testo}</p>
        </div>
      </div>
    </section>
  );
};

MonumentLeftImgContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentLeftImgContainer;