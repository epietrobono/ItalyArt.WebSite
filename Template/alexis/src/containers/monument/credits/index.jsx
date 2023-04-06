import PropTypes from "prop-types";

const CreditsComponent = ({ contenuto }) => {
    const leftCredits = contenuto?.Credits.filter((credit) => credit.IsSinistra);
    const rightCredits = contenuto?.Credits.filter((credit) => !credit.IsSinistra);

    return (
        <section className="text-image-section bg-custom">
            <div className="credits-image-list">
                {contenuto?.Image?.map((image, index) => (
                    <img
                        key={index}
                        className="img-fluid"
                        src={image?.Path}
                        alt={image?.Alt}
                    />
                ))}
            </div>
            <div className="credits-thanks-text">Si ringrazia</div>
            <div className="row">
                <div className="col-md-6 text-left">
                    {leftCredits.map((credit, index) => (
                        <div key={index}>
                            <h3>{credit?.Titolo}</h3>
                            <p>{credit?.Testo}</p>
                        </div>
                    ))}
                </div>
                <div className="col-md-6 text-right">
                    {rightCredits.map((credit, index) => (
                        <div key={index}>
                            <h3>{credit?.Titolo}</h3>
                            <p>{credit?.Testo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

CreditsComponent.propTypes = {
    contenuto: PropTypes.object,
};

export default CreditsComponent;
