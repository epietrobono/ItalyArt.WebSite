import PropTypes from "prop-types";

function Tour360Content  ({url}) {
    return (
        <iframe title='Duomo di Siena' allowfullscreen mozallowfullscreen='true' webkitallowfullscreen='true' allow='autoplay; fullscreen; xr-spatial-tracking' className="embed-responsive" src={url}> </iframe>
    );
}

Tour360Content.propTypes = {
    url: PropTypes.string
};

export default Tour360Content;