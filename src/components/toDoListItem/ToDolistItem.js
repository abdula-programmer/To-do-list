import React, { Component } from "react";
import "./ToDoListItem.css";
import { TrashFill, ExclamationLg } from "react-bootstrap-icons";

export default class ToDolistItem extends Component {
  
  render() {
    const { label, onDeleted,onToggleImportant, onToggleDone, done, important} = this.props;

    let classNames = "todo-list-item d-flex justify-content-between";

    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <div className="todo-list-item-btns">
          <button 
            className="btn btn-outline-success btn-sm"
            onClick={onDeleted}>
            
            <TrashFill />
          </button>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={onToggleImportant}
          >
            <ExclamationLg />
          </button>
        </div>
      </span>
    );
  }
}
