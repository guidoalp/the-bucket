import Lista from './list-ideas'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ideas: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const ideas = this.state.ideas.slice()
    ideas.push(e.target.idea.value)
    this.setState({
      ideas: ideas,
      value: ''
    })
    e.preventDefault()
  }

  handleChange(e) {
    this.setState( {value: e.target.value} )
  }

  randomAdj() {
    const adj = ['astonishing', 'amazing', 'awesome', 'stunning', 'marvelous', 'spectacular', 'breathtaking', 'worldchanging']
    return adj[Math.floor(Math.random()*adj.length)]
  }

  render() {
    return (
      <div>
        <h1>The Bucket</h1>
        <Lista ideas={ this.state.ideas } />
        <form onSubmit={ this.handleSubmit }>
          <input type="text" name="idea" value={ this.state.value } placeholder={ "Share your "+this.randomAdj()+" ideas!"} onChange={ this.handleChange }/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Main
