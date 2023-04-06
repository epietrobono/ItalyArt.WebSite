import PropTypes from "prop-types";

const MonumentRightImgContainer = ({ contenuto }) => {
  return (
    <section className={`${contenuto?.IsPink? "text-image-section":"text-image-section-white"}`}>
      <div className="margin-section-image-text d-flex">
        <div className="col-md-6">
          <h3>{contenuto?.Titolo}</h3>
          <p>{contenuto?.Testo}</p>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid image-text-section float-right"
            src={contenuto?.Image?.Path}
            alt={contenuto?.image?.Alt}
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