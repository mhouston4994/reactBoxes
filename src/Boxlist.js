import React, { Component } from 'react';
import Box from './Box.js';
import Boxform from './Boxform.js';

class Boxlist extends Component {
    constructor(props){
        super(props);
        //Set  state
        this.state = {
            boxes: [{
                width: '',
                height: '',
                color: ''
            }]
        };
            this.create = this.create.bind(this);
    }
    //Create new box to pass into form component
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    render(){
        //Array of boxes
        const allBoxes = this.state.boxes.map((box) =>( <Box box={box}/>))
        return(
            <div>
            <Boxform createBox={this.create} />
            {allBoxes}
            </div>
        )
    }

}

export default Boxlist;