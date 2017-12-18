import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
   
  addItem(itm) {
    const itemArray = this.state.items;
 
    if (this._inputElement.value !== "") {
      itemArray.unshift({
          text: this._inputElement.value,
          key: Date.now()
      });
   
      this.setState({
        items: itemArray
      });
   
      this._inputElement.value = "";
    }

    itm.preventDefault();
  }

  removeItem(key) {
    const filteredItems = this.state.items.filter (item => {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={itm => this._inputElement = itm}
                placeholder="task goes here...">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
          remove={this.removeItem}/>
      </div>
    );
  }
}
 
export default TodoList;