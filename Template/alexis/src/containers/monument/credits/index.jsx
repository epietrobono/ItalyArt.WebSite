import PropTypes from "prop-types";

const CreditsComponent = ({ contenuto }) => {
    const leftCredits = contenuto?.Credits.filter(
        (credit) => credit.IsSinistra
    );
    const rightCredits = contenuto?.Credits.filter(
        (credit) => !credit.IsSinistra
    );

    return (
        <section className="bg-credits">
            <div className="text-image-section-credits">
                <div className="credits-image-list">
                    {contenuto?.Image?.map((image, index) =>
                        image.url ? (
                            <a key={index} href={image.url}>
                                <img
                                    className="img-fluid"
                                    src={image?.Path}
                                    alt={image?.Alt}
                                />
                            </a>
                        ) : (
                            <img
                                key={index}
                                className="img-fluid"
                                src={image?.Path}
                                alt={image?.Alt}
                            />
                        )
                    )}
                </div>
                <div className="credits-thanks-text">Si ringrazia</div>
                <div className="row">
                    <div className="col-md-6 text-left credits-text">
                        {leftCredits.map((credit, index) => (
                            <div key={index}>
                                <h6>{credit?.Titolo}</h6>
                                <p>{credit?.Testo}</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-6 text-right credits-text">
                        {rightCredits.map((credit, index) => (
                            <div key={index}>
                                <h6>{credit?.Titolo}</h6>
                                <p>{credit?.Testo}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

CreditsComponent.propTypes = {
    contenuto: PropTypes.object,
};

export default CreditsComponent;
