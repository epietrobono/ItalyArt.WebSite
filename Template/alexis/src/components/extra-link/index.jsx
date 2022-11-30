import PropTypes from "prop-types";
import Icon from "../icon";

function ExtraLink({icon, title, desc}) {
    return(
        <div className="row extra-link border shadow rounded-3 bg-light my-2">
            <div className="d-flex flex-column align-items-center p-4">
                <Icon path={icon.path} image={icon.image}></Icon>
                <h3 className="text-center">{title}</h3>
                <span className="text-center">{desc}</span>
            </div>
        </div>
    );
}

ExtraLink.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default ExtraLink;