import React, {Component} from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {

  state ={

    todos:[
      {

        id:1,
        title:'Take out the trash',
        completed :false

      },
      {

        id:2,
        title:'Dinner with wife',
        completed :true

      },
      {

        id:3,
        title:'Meeting with boss',
        completed :false

      }

    ]

  }


  //Toggle Complete
  markComplete =(id) =>{

    //console.log(id)
    this.setState({
      todos:this.state.todos.map(todo =>{

        if(todo.id === id){

          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  render(){

    return (

 <div className="App"> 

    {/* adds properties to the todo component from the states */}
    <Todos todos ={ this.state.todos} markComplete ={this.markComplete}
    
    />
 
 </div>
    );

  }

}

export default App;
