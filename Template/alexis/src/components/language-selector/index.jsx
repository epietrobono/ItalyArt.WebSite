import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import LanguageContext from '../../context/LanguageContext';

function LanguageSelector({ data }) {
    const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (languageCode) => {
        setSelectedLanguage(languageCode);
    };

    const currentLanguage = data.find(lang => lang.Sigla === selectedLanguage);

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
