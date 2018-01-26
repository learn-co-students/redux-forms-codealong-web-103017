import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add ToDo</label>
            <input
              type="text"
              onChange={(event)=>this.handleChange(event)}>
            </input>
          </p>
          <input type="submit"></input>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
