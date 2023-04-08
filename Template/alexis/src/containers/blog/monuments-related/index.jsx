import PropTypes from "prop-types";
import MonumentCard from "../../../components/monument-card";

const MonumentsRelated = ({ title, monuments }) => {
    return (
        <div>
            <div className="row-mod justify-content-center">
                <div className="col col-auto">
                    <h4 className="mob-h2">{title}</h4>
                    <div className="blog-monuments gap-10">
                        {monuments.slice(0, 2).map((val, key) => {
                            return (
                                <div className="row-mod flex-1-1" key={key}>
                                    <MonumentCard data={val}></MonumentCard>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

MonumentsRelated.propTypes = {
    title: PropTypes.string,
    monuments: PropTypes.object,
};

export default MonumentsRelated;
