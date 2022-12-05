import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SearchForm = ({ data, icon="search-icon" }) => {
    return (
        <div className="search-form">
            <form action={data.url}>
                <input
                    id="search"
                    className={"col col-auto input-text border rounded-pill py-2 px-4 " + icon}
                    placeholder={data.placeholder}
                    type="search"
                />
                <Link
                    to={process.env.PUBLIC_URL + data.url}
                    className="col col-auto btn btn-light border rounded-pill ms-2"
                >
                    {data.buttonText}
                </Link>
            </form>
        </div>
    );
};

SearchForm.propTypes = {
    data: PropTypes.object,
    icon: PropTypes.string,
};

export default SearchForm;
