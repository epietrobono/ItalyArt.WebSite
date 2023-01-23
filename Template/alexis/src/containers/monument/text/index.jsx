import PropTypes from "prop-types";

const MonumentTextContainer = ({conentuto}) => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <p>{conentuto}</p>
                </div>
            </div>
        </div>
    );
};

MonumentTextContainer.propTypes = {
    conentuto: PropTypes.string
}

export default MonumentTextContainer;