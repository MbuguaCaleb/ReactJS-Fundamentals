import React,  {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {

  render(){

    return this.props.todos.map((todo) =>(

       /* passing a todo property which is a single element looped through */
      <TodoItem key ={todo.id} todo ={todo} markComplete ={
        this.props.markComplete
      }/>
  ));
  }

}


//Prop Types
//Good Practice

Todos.propTypes ={

  todos:PropTypes.array.isRequired

}

export default Todos;
