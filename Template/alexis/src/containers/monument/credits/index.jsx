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
                {contenuto.Images.length > 0 && (
                    <>
                        <div className="credits-image-list">
                            {contenuto?.Images?.map((image, index) =>
                                image.Url ? (
                                    <a
                                        key={index}
                                        href={image.Url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
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
                    </>
                )}
                <div className="credits-thanks-text text-italyart">
                    {contenuto?.Titolo}
                </div>
                <div className="row justify-content-center text-is-center">
                    <div className="col col-auto">
                        <p>{contenuto.Testo}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-left credits-text">
                        {leftCredits.map((credit, index) =>
                            credit.Url ? (
                                <a
                                    key={index}
                                    href={credit.Url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div>
                                        <h6>{credit?.Titolo}</h6>
                                        <p>{credit?.Testo}</p>
                                    </div>
                                </a>
                            ) : (
                                <div key={index}>
                                    <h6>{credit?.Titolo}</h6>
                                    <p>{credit?.Testo}</p>
                                </div>
                            )
                        )}
                    </div>
                    <div className="col-md-6 text-right credits-text">
                        {rightCredits.map((credit, index) =>
                            credit.url ? (
                                <a key={index} href={credit.url}>
                                    <div>
                                        <h6>{credit?.Titolo}</h6>
                                        <p>{credit?.Testo}</p>
                                    </div>
                                </a>
                            ) : (
                                <div key={index}>
                                    <h6>{credit?.Titolo}</h6>
                                    <p>{credit?.Testo}</p>
                                </div>
                            )
                        )}
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
