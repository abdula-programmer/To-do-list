import React, { Component } from "react";
import "./AppHeader.css";

export default class AppHeader extends Component {
  render() {
    const { toDo, done } = this.props;
    return (
      <div className="d-flex justify-content-between">
        <h1>TO DO LIST</h1>
        <h3>
          {toDo} more to do, {done} done
        </h3>
      </div>
    );
  }
}
