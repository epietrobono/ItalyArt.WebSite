import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import HamburgerMenu from "../../components/hamburger-menu";
import HeaderLinks from "../../components/header-links";
import LanguageSelector from "../../components/language-selector";
import Logo from "../../components/logo/index";
import Api from "../../services/Api";
import LanguageContext from "../../context/LanguageContext";
import { useContext } from "react";

const Header = ({ classOption }) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    const [data, setData] = useState({});
    const [isMounted18, setIsMounted18] = useState(false);
    
    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    
    const [searchbarShow, setSearchbarShow] = useState(false);
    const onSearchHandler = () => {
        setSearchbarShow((prev) => !prev);
    };
    
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    
    const handleScroll = ({}) => {
        setScroll(window.scrollY);
    };
    
    useEffect(async () => {
        console.log("entro in useEffects");
        await Api.GetHeader().then((results) => {    
                setIsMounted18(true);
                console.log("esegue then");
                setData(results);
                setIsLoading(false);
            });
    }, []);

    const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
    
    if (!isMounted18) {
        return null; // non renderizzare il componente fino a quando non è montato
      }

    return (
        <Fragment>
            {!isLoading && ( 
            <>
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
                                    className="logo-nav-bar"
                                />
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="header-links-area">
                                <HeaderLinks data={data}></HeaderLinks>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="header-languages-area">
                                <LanguageSelector data={data.Lingue} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
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
            <HamburgerMenu show={ofcanvasShow} onClose={onCanvasHandler} data={data}></HamburgerMenu>
       </> 
            )}
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
