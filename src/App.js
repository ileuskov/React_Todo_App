import React, {Component} from 'react';
import Todos from "./Todos.js"
import AddTodo from "./AddTodo"

class App extends Component {
  // initial state and first 3 todos in the app
  state = {
    todos: [
      { id: 1, content: "become a front end developer" },
      { id: 2, content: "learn back end development" },
      { id: 3, content: "become a full stack developer" }
    ]
  }
  // delete feature that removes the todos with the same id and shows the new State of the todos
  deleteTodo= (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  // Creating a Todo with a randomly generated ID
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
