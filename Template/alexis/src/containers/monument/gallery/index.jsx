import PropTypes from "prop-types";

const MonumentGalleryContainer = ({contenuto }) => {
    return (
        <div className="row justify-content-center">
            <div className="col col-auto border-citazione">
                {
                    contenuto.images.map((content, index) => {
                        return <img src={content.path} alt={content.alt} key={index} />;
                      })
                }
            </div>
        </div>
    );
};

MonumentGalleryContainer.propTypes = {
    contenuto: PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };


export default MonumentGalleryContainer;