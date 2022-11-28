import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const IntroMonuments = ({ data }) => {
    return (
        <div
            className="intro-section section overlay"
            style={{
                backgroundImage: `url(${
                    process.env.PUBLIC_URL + data.backgroundImage
                })`,
            }}
        >
            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">
                    <div className="col align-self-center">
                        <div className="intro-content position-absolute top-50 start-50 translate-middle shadow">
                            <h2 className="title shadow-text">{data.title}</h2>
                            <div className="row monuments-search-input py-2 border shadow rounded-3 bg-light">
                                <form action="#" className="form-search">
                                    <input
                                        id="search"
                                        className="col col-auto input-text border shadow rounded-pill mx-2 py-2 px-4"
                                        placeholder={data.placeholder}
                                        type="search"
                                    />
                                    <Link
                                        to={process.env.PUBLIC_URL + data.url}
                                        className="col col-auto btn btn-light border shadow rounded-pill mx-2"
                                    >
                                        {data.buttonText}
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

IntroMonuments.propTypes = {
    data: PropTypes.object,
};

export default IntroMonuments;
