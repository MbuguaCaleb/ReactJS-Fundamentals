import React,  {Component} from 'react';
import TodoItem from './TodoItem';


class Todos extends Component {

  render(){

    return this.props.todos.map((todo) =>(

       /* passing a todo property which is a single element looped through */
      <TodoItem key ={todo.id} todo ={todo}/>
  ));
  }

}

export default Todos;
