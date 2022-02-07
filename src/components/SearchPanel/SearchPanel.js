import React, { Component } from "react";
import ButonsFilter from "../ButtonsFilter/ButtonsFilter";
import "./SearchPanel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };
  onSearchChange = (e) => {
    const term = this.props.firstToUpper( e.target.value);
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    const {term} = this.state
    return (
      <div className="search-panel">
        <input
          placeholder="search"
          value={term}
          onChange={this.onSearchChange}
        ></input>
        
      </div>
    );
  }
}
