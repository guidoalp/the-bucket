const Lista = (props) =>
    <ul>
      { props.ideas.map((idea, index) => <li key={ index }>{ idea }</li>) }
    </ul>
    
export default Lista
