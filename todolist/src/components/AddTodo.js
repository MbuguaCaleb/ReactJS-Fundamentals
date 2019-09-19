import React, { Component } from 'react'

export class AddTodo extends Component {

//for fields should be fields in your state
    state ={

        'title':''
    }


//remeber arrow functions role when using custom reactMethods
//remeber that this state is in this particular component
//We do not have to go to the APP.JS....
//THE Above is a component level state.


onChange = (e) => this.setState({
    [e.target.name]: e.target.value
});


onSubmit = (e) =>{
    
    e.preventDefault();
    this.props.addTodo(this.state.title);
    //setting the state object back to nothing when submitted.
    this.setState({
        title: ''
    });
}
    render() {
        return (
           <form onSubmit={this.onSubmit} style ={{display:'flex'}}>
               <input 
               type="text" 
               name="title" 
               placeholder="Add Todo..."
               style ={{'flex':'10', padding:'5px'}}
               value ={this.state.title}
               onChange ={this.onChange}
               />

             
<input 
type="submit" 
value="Submit"
className ="btn"
style={{flex:'1'}}
/>
           </form>
        )
    }
}

export default AddTodo
