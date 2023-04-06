import PropTypes from "prop-types";
import React  from "react";
import { Link } from "react-router-dom";
import Api from "../../services/Api";

class SearchForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        value: typeof this.props.data.Research === 'undefined' ? '' : this.props.data.Research,
        errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validateEmail(this.state.value)) {
            Api.AddNewsletter(this.state.value);
            window.location.reload();
        } else {
            this.setState({ errorMessage: "Inserire una corretta Email" });
        }
    }
   

    render(){
        const data = this.props.data;
        var tmpIcon=this.props.icon;
        if(typeof tmpIcon == 'undefined' || !tmpIcon){
            tmpIcon="search-icon";
        }
        const icon=tmpIcon;
            return (
                <div className="search-form">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id="search"
                            className={"col col-auto input-text border rounded-pill py-2 px-4 " + icon}
                            placeholder={data?.Placeholder}
                            type="search"
                            value={this.state.value} onChange={this.handleChange}
                        />
                        <button
                            type="submit"
                            className="col col-auto btn-cerca btn-light border rounded-pill ms-2"
                        >
                            {data?.ButtonText}
                        </button>
                    </form>
                    {this.state.errorMessage && <p className="text-danger">{this.state.errorMessage}</p>}
                </div>
            );
        };
}

SearchForm.propTypes = {
    data: PropTypes.shape({
        Placeholder: PropTypes.string,
        ButtonText: PropTypes.string,
        Research: PropTypes.string
    }),
    icon: PropTypes.string,
};

export default SearchForm;