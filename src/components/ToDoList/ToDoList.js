import React, { Component } from "react";
import ToDolistItem from "../toDoListItem/ToDolistItem";
import "./ToDoList.css"


export default class ToDoList extends Component {
  render() {
   const { todos, onDeleted, onToggleImportant,onToggleDone } = this.props;
   const elements = todos.map((item) => {
   const {id, ...itemProps } = item;
   return (
      <li className="list-group-item todo-list-item" key={id}>
         <ToDolistItem 
            {...itemProps} 
            onDeleted={()=> onDeleted(id)}
            onToggleImportant={()=>onToggleImportant(id)}
            onToggleDone={()=>onToggleDone(id)}
            />
      </li>
   );
    });
    return (

        <ul className="list-group">{elements}</ul>

    );
  }
}
