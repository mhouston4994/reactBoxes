import React, { Component } from 'react';
import Boxlist from './Boxlist.js';

class Boxform extends Component {
        constructor(props){
        super(props);
        //Set default state
        this.state = {
            width: '',
            height: '',
            color: ''
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        //Update state on change
        let property = evt.target.name;
        let value = evt.target.value;
        this.setState({[property]: value});
    }

    handleSubmit(evt){
        //Create new box
        evt.preventDefault();
        this.props.createBox(this.state);

    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                 Width:
                <input
                 type="text" placeholder="width" name="width"  value={this.state.width} onChange={this.handleChange} />
                </label>
                <label>
                 Width:
                <input
                 type="text" placeholder="height" name="height"  value={this.state.height} onChange={this.handleChange} />
                </label>
                <label>
                 Width:
                <input
                 type="text" placeholder="color" name="color" value={this.state.color} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

 export default Boxform;