import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SearchForm = ({ data, icon="search-icon" }) => {
    return (
        <div className="search-form">
            <form action={data?.Url}>
                <input
                    id="search"
                    className={"col col-auto input-text border rounded-pill py-2 px-4 " + icon}
                    placeholder={data?.Placeholder}
                    type="search"
                />
                <Link
                    to={process.env.PUBLIC_URL + data?.Url}
                    className="col col-auto btn-cerca btn-light border rounded-pill ms-2"
                >
                    {data?.ButtonText}
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
