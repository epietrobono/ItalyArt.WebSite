import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import HeaderLinks from "../../components/header-links";
import LanguageSelector from "../../components/language-selector";
import Logo from "../../components/logo/index";

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
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto offset-md-2">
                            <div className="header-logo-area">
                                <Logo
                                    image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                />
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="header-links-area">
                                <HeaderLinks></HeaderLinks>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="header-languages-area">
                                <LanguageSelector></LanguageSelector>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
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
