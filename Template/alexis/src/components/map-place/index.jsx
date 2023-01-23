import PropTypes from "prop-types";
import React, {Component} from 'react';
import { Tooltip } from "react-bootstrap";
import placestyle from "./place.js";


export default class MapPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};
  

  render() {
    return (
       <div style={{ 
                    position: 'absolute',
                    width: 35,
                    height: 35,
                    left: -40 / 2,
                    top: -40 / 2,

                    transform:"rotate(45deg)",
                    marginTop: "20px",

                    border: '5px solid #f44336',
                    borderRadius: "50% 50% 0 50%",
                    backgroundColor: '#f44336',
                    textAlign: 'center',
                    color: '#3f51b5',
                    fontSize: 16,
                    fontWeight: 'bold',
                    padding: 4
                  }}  
                title={this.props.text}>                 
       </div>
    );
  }
}