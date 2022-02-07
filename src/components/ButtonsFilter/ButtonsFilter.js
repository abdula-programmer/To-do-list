import React, { Component } from "react";
import "./ButtonsFilter.css";

export default class ButonsFilter extends Component {
  buttons = [
    { nameButton: "All", label: "All" },
    { nameButton: "Active", label: "Active" },
    { nameButton: "Done", label: "Done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ nameButton, label }) => {
      const onActive = filter === nameButton;
      const clazz =onActive? " btn-info" : " btn-outline-secondary";
      return (
        <button 
          type="button" 
          className={`btn ${clazz}`} 
          key={nameButton}
          onClick={() =>onFilterChange(nameButton)}
          >
          
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
