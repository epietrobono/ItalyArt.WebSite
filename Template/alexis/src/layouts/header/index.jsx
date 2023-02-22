import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import HamburgerMenu from "../../components/hamburger-menu";
import HeaderLinks from "../../components/header-links";
import LanguageSelector from "../../components/language-selector";
import Logo from "../../components/logo/index";
import HeaderLinksData from "../../data/header-links.json";

const Header = ({ classOption }) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    const [searchbarShow, setSearchbarShow] = useState(false);
    const onSearchHandler = () => {
        setSearchbarShow((prev) => !prev);
    };
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector(".header-area");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({}) => {
        setScroll(window.scrollY);
    };
    return (
        <Fragment>
            <header
                className={`py-0 header-area header-default sticky-header ${classOption} ${
                    scroll > headerTop ? "sticky" : ""
                }`}>

                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between padd-header">
                        <div className="col-auto ">
                            <div className="header-logo-area">
                                <Logo
                                    image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                />
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="header-links-area">
                                <HeaderLinks data={HeaderLinksData.it}></HeaderLinks>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="header-languages-area">
                                <LanguageSelector></LanguageSelector>
                            </div>
                            <div className="header-action-area">
                                <button
                                    className="btn btn-white"
                                    onClick={onCanvasHandler}
                                    id="btn-burger-menu"
                                >
                                    <img src={`${process.env.PUBLIC_URL}/img/icons/burger-menu.svg`} alt="burger menu" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <HamburgerMenu show={ofcanvasShow} onClose={onCanvasHandler} data={HeaderLinksData.it}></HamburgerMenu>
        </Fragment>
    );
};

Header.propTypes = {
    classOption: PropTypes.string,
};

Header.defaultProps = {
    classOption: "header-area header-default sticky-header",
};

export default Header;
