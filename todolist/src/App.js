import React, {Component} from 'react';
import Header from './components/layouts/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
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


  //Delete Todo

  delTodo =(id)=>{


    this.setState({
      todos:[

        ...this.state.todos.filter(todo =>todo.id
          !== id)
      ]
    });

  }
  render(){

    return (

 <div className="App"> 

<div className="container">
   {/* adds properties to the todo component from the states */}
   <Header />
    <AddTodo/>

    <Todos todos ={ this.state.todos} markComplete ={this.markComplete}

    delTodo ={this.delTodo}
    
    />

</div>
 </div>
    );

  }

}

export default App;
