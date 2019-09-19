import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
import uuid from 'uuid';

class App extends Component {

  state ={

    todos:[
      {

        id:uuid.v4(),
        title:'Take out the trash',
        completed :false

      },
      {

        id:uuid.v4(),
        title:'Dinner with wife',
        completed :true

      },
      {

        id:uuid.v4(),
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

  //Add Todo
  addTodo =(title) =>{

    //console.log(title)
    const newTodo ={

      id:uuid.v4(),
      title,
      completed:false
        
    }
    this.setState({
      todos:[...this.state.todos,newTodo]
    })

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
<Router>

 <div className="App"> 

<div className="container">
   {/* adds properties to the todo component from the states */}
  {/*Note that the header is component one*/ }
   <Header />
   <Route exact path="/" render={props =>(

     <React.Fragment>

{/*Note that the header is component two*/ }
<AddTodo addTodo ={this.addTodo}/>

{/*Note that the header is component three*/ }
<Todos todos ={ this.state.todos} markComplete ={this.markComplete}

delTodo ={this.delTodo}

/>
     </React.Fragment>
   )}/>


{/*Note that the header is component four*/ }
   <Route path="/about"  component ={About}/>
   

</div>
 </div>
 </Router>
    );

  }

}

export default App;
