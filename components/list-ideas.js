import moment from 'moment'

function formatDate(date) {
  return moment(date).format('DD/MM/YYYY - HH:mm:ss')
}

const Lista = props =>
  <ul>
    { props.ideas.map((idea, index) => <li key={ index }>{ formatDate(idea.date) } => { idea.author.name } => { idea.content }</li>) }
  </ul>

export default Lista
