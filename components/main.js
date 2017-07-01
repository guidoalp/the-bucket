import moment from 'moment'
import styled from 'styled-components'

import loadDB from './db'
import getIdeas from './get-ideas'
import pushIdea from './push-idea'
import List from './list-ideas'

const addIdea = {
  width: '100%'
}

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
      author: this.props.user,
      date: Date.now()
    }

    if (! value) return

    ideas.push(newIdea)
    this.setState({ ideas, value: '' })

    pushIdea(newIdea)
  }

  onChange({ value }) {
    this.setState({ value })
  }

  componentDidMount() {
    const list = getIdeas()
      .then(response => this.setState({ ideas: response }))
  }

  getPlaceholder() {
    const words = ['astonishing', 'amazing', 'awesome', 'stunning', 'marvelous', 'spectacular', 'breathtaking', 'worldchanging']
    const index = Math.floor(Math.random() * words.length)

    return `Share your ${words[index]} ideas!`
  }

  render() {
    return <div>
      <List ideas={ this.state.ideas } />
      <form onSubmit={ this.onSubmit }>
        <textarea name="idea" value={ this.state.value } style={ addIdea } placeholder={ this.getPlaceholder() } onChange={ this.onChange }/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  }
}

export default Main
