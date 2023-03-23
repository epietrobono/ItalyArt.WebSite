import PropTypes from "prop-types";

const MonumentCitContainer = ({contenuto, nSezione }) => {
    return (
        <div className="row justify-content-center">
            <div className="col col-auto border-citazione">
                {
                    contenuto.gallery.map((content, index) => {
                        return <img src={content.path} alt={content.alt} key={index} />;
                      });
                }
            </div>
        </div>
    );
};

MonumentCitContainer.propTypes = {
    contenuto: PropTypes.shape({
        gallery: PropTypes.arrayOf(
          PropTypes.shape({
            alt: PropTypes.string,
            path: PropTypes.string,
          })
        )
      }),      
      nSezione: PropTypes.number.isRequired,
    };

export default MonumentCitContainer;