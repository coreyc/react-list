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

    console.log(itemArray);
    itm.preventDefault();
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
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}
 
export default TodoList;