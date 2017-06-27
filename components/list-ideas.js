const Lista = props =>
  <ul>
    { props.ideas.map((idea, index) => <li key={ index }>{ idea.author.name } => { idea.content }</li>) }
  </ul>

export default Lista
