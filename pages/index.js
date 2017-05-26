import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var adj = ['astonishing', 'amazing', 'awesome', 'stunning', 'marvelous', 'spectacular', 'breathtaking', 'worldchanging']

const Lista = (props) => (
  <div>
    <ul>
      { props.ideas.map((idea, index) => <li key={ index }>{ idea }</li>) }
    </ul>
  </div>
)

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {ideas: []}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    var ideas = this.state.ideas.slice()
    ideas.push(e.target.idea.value)
    this.setState({
      ideas: ideas,
      value: ''
    })
    e.preventDefault()
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>The Bucket</h1>
        <Lista ideas={ this.state.ideas } />
        <form onSubmit={ this.handleSubmit }>
          <input type="text" name="idea" value={ this.state.value } placeholder={ "Share your "+adj[Math.floor(Math.random()*adj.length)]+" ideas!" } onChange={ this.handleChange }/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Index
