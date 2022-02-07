import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ToDoList from "../ToDoList/ToDoList";
import "./App.css";

import React, { Component } from "react";
import AddForm from "../AddItemForm/AddItemForm";
import ButonsFilter from "../ButtonsFilter/ButtonsFilter";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createNewItem("Clear at 6 o'clock"),
      this.createNewItem("Modify the application"),
      this.createNewItem("Make a sparking app"),
    ],
    term: "",
    filter: "All",
  };

  createNewItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  findElemByInd(index) {
    return this.state.todoData.findIndex((el) => el.id === index);
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = this.findElemByInd(id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = this.findElemByInd(id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  addItem = (text = "fasdfasfd") => {
    const newItem = this.createNewItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") };
    });
  };

  firstToUpper(label) {
    if (label.length > 0) return label[0].toUpperCase() + label.slice(1);
    else return "";
  }

  onSearch(items, term) {
    if (term.length === 0) return items;

    return items.filter((item) => item.label.indexOf(term) > -1);
  }
  btnsFilter(arr, filter) {
    switch (filter) {
      case "All":
        return arr;
        break;
      case "Active":
        return arr.filter((item) => !item.done);
        break;
      case "Done":
        return arr.filter((item) => item.done);
        break;
      default:
        return arr;
    }
  }
  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({filter})
  }

  render() {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter((el) => el.done).length,
      moreToCount = todoData.length - doneCount,
      visibleItems = this.btnsFilter(this.onSearch(todoData, term), filter);

    return (
      <div className="App">
        <AppHeader toDo={moreToCount} done={doneCount} />
        <div className="d-flex ">
        <SearchPanel
          onSearchChange={this.onSearchChange}
          firstToUpper={this.firstToUpper}
        />
        <ButonsFilter
          filter={filter}
          onFilterChange={this.onFilterChange}/>  
        </div>
        
        <ToDoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone}
        />
        <AddForm onAdded={this.addItem} firstToUpper={this.firstToUpper} />
      </div>
    );
  }
}
