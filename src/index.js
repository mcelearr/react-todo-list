import React from 'react';
import { render } from 'react-dom';
import List from './List.js'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      toDoList:[]
    }
  }

  updateToDoList () {
    const text = document.getElementById('input-form').value;
    this.setState({
      toDoList: this.state.toDoList.concat([text])
    })
  }

  render () {
    return (
      <div>
      <form>
        <input
          id='input-form'
          type='text'
          placeholder='What do you have to do today?'
        />
      </form>
      <button
        onClick={this.updateToDoList.bind(this)}>
        Submit
      </button>
        <List toDoList={this.state.toDoList}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('container'));
