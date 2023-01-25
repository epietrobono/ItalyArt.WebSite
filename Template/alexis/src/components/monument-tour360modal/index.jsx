import PropTypes from "prop-types";

function Tour360ContentModal  ({url}) {
    return (
        <iframe title='Duomo di Siena' allowfullscreen className="embed-responsive iframe-Tour360" src={url}> </iframe>
    );
}

Tour360ContentModal.propTypes = {
    url: PropTypes.string
};

export default Tour360ContentModal;