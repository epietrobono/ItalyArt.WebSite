import PropTypes from "prop-types";

function Tour360Content  ({conentuto}) {
    return (
        <iframe title='Duomo di Siena' className="embed-responsive" src={conentuto}> </iframe>
    );
}

Tour360Content.propTypes = {
    conentuto: PropTypes.string
};

export default Tour360Content;