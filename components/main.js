import Lista from './list-ideas'
import { getUserFromCookie, getUserFromLocalStorage } from '../utils/auth'

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
      author: getUserFromLocalStorage()
    }

    getUserFromLocalStorage().name

    if (! value) return

    ideas.push(newIdea)
    this.setState({ ideas, value: '' })
  }

  onChange({ value }) {
    this.setState({ value })
  }

  getPlaceholder() {
    const words = ['astonishing', 'amazing', 'awesome', 'stunning', 'marvelous', 'spectacular', 'breathtaking', 'worldchanging']
    const index = Math.floor(Math.random() * words.length)

    return `Share your ${words[index]} ideas!`
  }

  render() {
    return <div>
      <Lista ideas={ this.state.ideas } />
      <form onSubmit={ this.onSubmit }>
        <input type="text" name="idea" value={ this.state.value } placeholder={ this.getPlaceholder() } onChange={ this.onChange }/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  }
}

export default Main
