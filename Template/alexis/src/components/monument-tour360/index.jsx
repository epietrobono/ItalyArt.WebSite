import PropTypes from "prop-types";

function Tour360Content  ({url}) {
    return (
        <iframe title='Duomo di Siena' className="embed-responsive" src={url}> </iframe>
    );
}

Tour360Content.propTypes = {
    url: PropTypes.string
};

export default Tour360Content;