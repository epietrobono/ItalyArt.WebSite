import PropTypes from "prop-types";

function Model3DContent ({conentuto}) {
    return (
            <div dangerouslySetInnerHTML={{__html: conentuto }} />
    );
}

Model3DContent.propTypes = {
    conentuto: PropTypes.string
};

export default Model3DContent;