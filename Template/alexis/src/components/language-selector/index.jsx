import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function LanguageSelector({ data }) {

    const handleLanguageChange = (languageCode) => {
        localStorage.setItem("selectedLanguage", languageCode);
        window.location.reload();
    };

    const currentLanguage = data.find(lang => lang.Sigla.toLowerCase() === localStorage.getItem("selectedLanguage").toLowerCase());

    return (
        <DropdownButton
            id="dropdown-basic-button"
            variant="white"
            title={
                <picture>
                    <img
                        src={`${process.env.PUBLIC_URL}${currentLanguage?.Image?.Path}`}
                        className="img-fluid"
                        alt={currentLanguage?.Image?.Alt}
                    />
                </picture>
            }>
            <ul className="align-items-center">
                {data.map((val, key) => {
                    return (
                        <li key={key}>
                            <Dropdown.Item
                                onClick={() => handleLanguageChange(val?.Sigla)}
                            >
                                <picture>
                                    <img
                                        src={`${process.env.PUBLIC_URL}${val?.Image?.Path}`}
                                        className="img-fluid"
                                        alt={val?.Image?.Alt}
                                    />
                                </picture>
                            </Dropdown.Item>
                        </li>
                    );
                })}
            </ul>
        </DropdownButton>
    );
}

LanguageSelector.propTypes = {
    data: PropTypes.array,
};

export default LanguageSelector;
