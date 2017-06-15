import moment from 'moment'
import loadDB from './db'
import getIdeas from './get-ideas'
import pushIdea from './push-idea'
>>>>>>> Persistir state
import Lista from './list-ideas'

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ideas: [] }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const { ideas } = this.state
    const { value } = e.target.idea

    const newIdea = {
      content: value,
      date: moment().toString()
    }

    if (! value) return

    ideas.push(newIdea)
    this.setState({ ideas, value: '' })

    pushIdea(value)
  }

  onChange({ value }) {
    this.setState({ value })
  }

  componentDidMount() {
    const list = getIdeas()
    .then(response => this.setState({ideas: response}))
  }

  getPlaceholder() {
    const words = ['astonishing', 'amazing', 'awesome', 'stunning', 'marvelous', 'spectacular', 'breathtaking', 'worldchanging']
    const index = Math.floor(Math.random() * words.length)

    return `Share your ${words[index]} ideas!`
  }

  render() {
    return <div>
      <h1>The Bucket</h1>
      <Lista ideas={ this.state.ideas } />
      <form onSubmit={ this.onSubmit }>
        <textarea name="idea" value={ this.state.value } placeholder={ this.getPlaceholder() } onChange={ this.onChange }/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  }
}

export default Main
