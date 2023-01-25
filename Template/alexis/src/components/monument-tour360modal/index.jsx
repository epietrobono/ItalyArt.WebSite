import PropTypes from "prop-types";

function Tour360ContentModal  ({url}) {
    return (
        <iframe title='Duomo di Siena' allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay; fullscreen; xr-spatial-tracking' className="embed-responsive iframe-Tour360" src={url}> </iframe>
    );
}

Tour360ContentModal.propTypes = {
    url: PropTypes.string
};

export default Tour360ContentModal;