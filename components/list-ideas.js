import moment from 'moment'
import styled from 'styled-components'

const Ideas =
  styled.ul`
    margin: 10px;
  `

function formatDate(date) {
  return moment(date).format('DD/MM/YYYY - HH:mm:ss')
}

const List = props =>
  <Ideas>
    { props.ideas.map((idea, index) => <li key={ index }>{ formatDate(idea.date) } => { idea.author.name } => { idea.content }</li>) }
  </Ideas>

export default List
