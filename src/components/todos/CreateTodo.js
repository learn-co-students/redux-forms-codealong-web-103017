import React, { Component } from "react"

class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }
  handleInput = e => {
    let userInput = e.target.value
    this.setState({ input: userInput })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_TODO",
      todo: this.state.input
    })
  }

  render() {
    return (
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleInput} />
          </p>
          <input type="submit" handleSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default CreateTodo
