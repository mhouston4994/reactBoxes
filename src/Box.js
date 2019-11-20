import React, { Component } from 'react';
import './Box.css';
import Boxlist from './Boxlist';

class Box extends Component {
    render(){
        //Styling Boxes
        const boxStyle = {
            width: `${this.props.box.width}px`,
            height: `${this.props.box.height}px`,
            backgroundColor: this.props.box.color
        }
        return(
            <div className="Box">
                <div style={boxStyle}></div>
            </div>
        )
    }
}

export default Box;