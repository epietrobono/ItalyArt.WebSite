import PropTypes from "prop-types";

function Tour360ContentModal  ({conentuto}) {
    return (
        <iframe title='Duomo di Siena' className="embed-responsive iframe-Tour360" src={conentuto}> </iframe>
    );
}

Tour360ContentModal.propTypes = {
    conentuto: PropTypes.string
};

export default Tour360ContentModal;