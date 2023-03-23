import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../utils";

const HamburgerMenu = ({ show, onClose, data }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-toggle") ||
            target.classList.contains("menu-toggle")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <aside className={`off-canvas-wrapper ${show ? "active" : ""}`}>
            <div className="off-canvas-inner">
                <div className="off-canvas-overlay"></div>
                <div className="off-canvas-content">
                    <div className="off-canvas-header">
                        <div className="close-action">
                            <button className="btn-close" onClick={onClose}>
                                <i className="icon_close"></i>
                            </button>
                        </div>
                    </div>

                    <div className="off-canvas-item">
                        <div className="asside-navigation-area">
                            <ul className="asside-menu">
                                <li className="item">
                                        <NavLink
                                            exact
                                            to={process.env.PUBLIC_URL + "/"}
                                        >
                                            {data.Home}
                                        </NavLink>
                                </li>
                                <li className="item">
                                        <NavLink
                                            exact
                                            to={process.env.PUBLIC_URL + "/monuments"}
                                        >
                                            {data.Monuments}
                                        </NavLink>
                                </li>
                                <li className="item">
                                        <NavLink
                                            exact
                                            to={process.env.PUBLIC_URL + "/blog"}
                                        >
                                            {data.Blog}
                                        </NavLink>
                                </li>
                                <li className="item">
                                        <NavLink
                                            exact
                                            to={process.env.PUBLIC_URL + "/map"}
                                        >
                                            {data.Map}
                                        </NavLink>
                                </li>
                                <li className="item">
                                        <NavLink
                                            exact
                                            to={process.env.PUBLIC_URL + "/about"}
                                        >
                                            {data.About}
                                        </NavLink>
                                </li>
                                <li className="item">
                                    <select id="language" className="form-select" style={{color: "white", background: "#111"}}>
                                        <option value="it">Italiano</option>
                                        <option value="en">English</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="off-canvas-footer"></div>
                </div>
            </div>
        </aside>
    );
};

HamburgerMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.object
};

export default HamburgerMenu;
