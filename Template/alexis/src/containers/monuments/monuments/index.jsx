import PropTypes from "prop-types";
import MonumentPreview from "../../../components/monument-preview";

const MonumentsContainer = ({title, monuments}) => {
    return (
        <div>
            <div className="row-mod justify-content-center">
                <div className="col col-auto">
                    <h4 className="mob-h2">{title}</h4>
                    <div className="blog-monuments gap-10">
                    {
                        monuments.slice(0,2).map((val, key)=>{
                            return (
                                <div className="row-mod flex-1" key={key}>
                                    <MonumentPreview data={val} titleLocation={true}></MonumentPreview>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

MonumentsContainer.propTypes = {
    title: PropTypes.string,
    monuments: PropTypes.object,
}

export default MonumentsContainer;