import PropTypes from "prop-types";
import Icon from "../icon";

function ExtraLink({icon, title, desc, id}) {
    return(
        <div className="row extra-link border shadow rounded-3 bg-light my-2">
            <div id={id} className="d-flex flex-column align-items-center extra-link-content-area" >
                <Icon path={icon.path} image={icon.image}></Icon>
                <div className="text-extra-link">
                    <h3 className="text-center">{title}</h3>
                    <p className="text-center">{desc}</p>
                </div>
            </div>
        </div>
    );
}

ExtraLink.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    desc: PropTypes.string,
    id: PropTypes.string,
};

export default ExtraLink;