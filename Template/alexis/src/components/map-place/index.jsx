import PropTypes from "prop-types";
import React, {Component} from 'react';
import placestyle from "./place.js";


export default class MapPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
       <div style={placestyle}>
          {this.props.text}
       </div>
    );
  }
}
