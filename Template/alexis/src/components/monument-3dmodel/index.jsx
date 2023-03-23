import PropTypes from "prop-types";

function Model3DContent ({iframe}) {
    return (
            <div dangerouslySetInnerHTML={{__html: iframe }} />
    );
}

Model3DContent.propTypes = {
    iframe: PropTypes.string
};

export default Model3DContent;