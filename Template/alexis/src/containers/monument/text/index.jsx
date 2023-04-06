import PropTypes from "prop-types";

const MonumentTextContainer = ({contenuto}) => {
    return (
        <section className={`${contenuto?.IsPink? "text-image-section":""}`}>
        { contenuto?.Titolo ?
        (
            <div className="row justify-content-center main-content container-ita-2">
                <div className="col col-auto">
                    <h3>{contenuto?.Titolo}</h3> 
                </div>
            </div>
        ):null
        }
        <div className="row justify-content-center main-content container-ita-2">
            <div className="col col-auto">
                <p className="mb-5">{contenuto.Testo}</p>
            </div>
        </div>
        </section>
    );
};

MonumentTextContainer.propTypes = {
    contenuto: PropTypes.object
}

export default MonumentTextContainer;