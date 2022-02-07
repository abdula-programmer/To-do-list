import React, { Component } from "react";
import "./AddItemForm.css";



export default class AddForm extends Component {


  state = {
    value: ""
  }



  onLabelChange = (e) => {  
    this.setState({
      value: this.props.firstToUpper(e.target.value)
    });    
  }
  onSubmit = (e) =>{
    e.preventDefault();
    this.props.onAdded(this.state.value)
    this.setState({
      value:""
    })
  }
  
  render() {
    return (
      <form className ="input-group add-form"
      onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control add-input-form"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={this.state.value}
        />

        <button 
          className="btn btn-outline-secondary btn-add"
          >Add item</button>
      </form>
    );
  }
}
