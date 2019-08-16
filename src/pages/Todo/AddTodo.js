import React, {Component} from 'react'

class AddTodo extends Component {
    render (){
      return (
        <div className='addTodoContainer'>
            <form>
                <input onChange={(e) => this.updateInput(e)} type='text'></input>
            </form>
        </div>
      );
    }
  }

export default AddTodo;