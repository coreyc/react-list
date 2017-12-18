import React, { Component } from "react";
 
class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
  }
 
  createTasks(item) {
    return <li onClick={() => this.remove(item.key)} 
                key={item.key}>{item.text}</li>
  }

  remove(key) {
    this.props.remove(key)
  }
 
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;