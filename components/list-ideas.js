import moment from 'moment'

const Lista = props =>
  <ul>
    { props.ideas.map((idea, index) => <li key={ index }>{ moment(idea.date).format('DD/MM/YYYY - HH:mm:ss') } => { idea.content }</li>) }
  </ul>

export default Lista
