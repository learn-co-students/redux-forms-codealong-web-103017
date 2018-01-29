import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor() {
  super();
  this.state = {
    text: '',
  };
  }

  handleChange(e){
    this.setState({text: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({type: "ADD_TODO", todo: this.state})
  }

  render() {
    console.log("in todos",this.props.getStat);
    return(
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <input type="text" onChange = {(e)=> this.handleChange(e)}></input>
      <br />
      <button type="submit">ADD TODO</button>
      </form>
      {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
