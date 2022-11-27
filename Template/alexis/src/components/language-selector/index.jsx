import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function LanguageSelector() {
    return (
        <DropdownButton id="dropdown-basic-button" variant="white" title={
                <picture>
                    <img 
                        src={`${process.env.PUBLIC_URL}/img/icons/it-flag.png`}
                        className="img-fluid"
                        alt="IT-FLAG" />
                </picture>
            }>
            <ul className="align-items-center">
                <li>
                    <Dropdown.Item href="#/it">
                        <picture>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/icons/it-flag.png`}
                                className="img-fluid"
                                alt="IT-FLAG" />
                        </picture>
                    </Dropdown.Item>
                </li>
                <li>
                    <Dropdown.Item href="#/us">
                        <picture>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/icons/us-flag.png`}
                                className="img-fluid"
                                alt="US-FLAG" />
                        </picture>
                    </Dropdown.Item>
                </li>
            </ul>
        </DropdownButton>
    );
}

export default LanguageSelector;