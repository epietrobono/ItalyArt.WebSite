import PropTypes from "prop-types";

const MonumentTitleContainer = ({contenuto}) => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-auto">
                    <h2 className="title-monument">{contenuto.titolo}</h2>
                </div>
            </div>
        </>
    );
};

MonumentTitleContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentTitleContainer;