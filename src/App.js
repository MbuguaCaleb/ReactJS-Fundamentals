import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
//import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    //axios returns a promise which is the data..
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  //Toggle Complete
  markComplete = id => {
    //console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Add Todo
  //Making A a post request
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
  };

  //Delete Todo

  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            {/* adds properties to the todo component from the states */}
            {/*Note that the header is component one*/}
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  {/*Note that the header is component two*/}
                  <AddTodo addTodo={this.addTodo} />

                  {/*Note that the header is component three*/}
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            {/*Note that the header is component four*/}
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
