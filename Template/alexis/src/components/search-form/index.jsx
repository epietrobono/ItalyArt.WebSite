import PropTypes from "prop-types";
import React  from "react";
import { Link } from "react-router-dom";

class SearchForm extends React.Component {
    constructor(props) {
    super(props);
    if(typeof this.props.data.Research == 'undefined'){
        this.state = {value: ''};
    }else{
        this.state = {value: this.props.data.Research};
    }
    console.log('valeu research' + this.state.value);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {        
        const location = window.location.href.split('?')[0];
        var newUrl = location;
        if(!newUrl.includes("monuments")){
            newUrl=window.location.origin+'/monuments'
        }
        newUrl= newUrl+'?research='+this.state.value;
        // alert('E\' stato inserito un nome: ' + this.state.value + ' all\'url: '+location+ ' verso un nuovo url: ' + newUrl);
        event.preventDefault();
        window.location.replace(newUrl);
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