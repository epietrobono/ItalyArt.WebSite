import PropTypes from "prop-types";
import React, {Component} from 'react';


export default class MapPlaceTour extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};
  
 
  render() {
    return(
          <img style={{position: 'absolute', width: 35, left: -40 / 2, top: -80 / 2, padding: 4}} src={process.env.PUBLIC_URL + "/img/icons/google-maps-logo2.png"} alt="map-place" title={this.props.text}/>  
      )
  }
}