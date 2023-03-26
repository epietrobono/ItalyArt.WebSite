import PropTypes from "prop-types";

const MonumentGalleryContainer = ({contenuto }) => {
    return (
        <div className="row justify-content-center">
            <div className="col col-auto border-citazione">
                {
                    contenuto.Images.map((content, index) => {
                        return <img src={content.Path} alt={content.Alt} key={index} />;
                      })
                }
            </div>
        </div>
    );
};

MonumentGalleryContainer.propTypes = {
    contenuto: PropTypes.shape({
      Images: PropTypes.arrayOf(
        PropTypes.shape({
          Path: PropTypes.string.isRequired,
          Alt: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };


export default MonumentGalleryContainer;