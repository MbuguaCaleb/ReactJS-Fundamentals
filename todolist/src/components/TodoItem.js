import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div>

        {/* Already has data from the propery thus you may extract */}
               <p>{this.props.todo.title}</p>
              
                
            </div>
        )
    }
}

export default TodoItem
