import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Lista = (props) => (
  <div>
    <ul>
      {props.ideas.map(function(idea, index){
          return <li key={ index }>{idea}</li>;
      })}
    </ul>
  </div>
)

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ideas: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    var ideas = this.state.ideas.slice()
    ideas.push(e.target.idea.value)
    this.setState({
      ideas: ideas,
      value: ''
    });
    e.preventDefault()
  }

  handleChange(event) {
  this.setState({value: event.target.value});
}


  render() {
    return (
      <div>
        <Lista ideas={this.state.ideas} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="idea" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Index
