const App = ({}) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <h1>Half Stack application development</h1>
    )
  }

  const Content = (props) => {
    return (
      <>
      
      <h1>Content of course</h1>
      <ul>
        <li>{props.part1} {props.exercises1}</li>
        <li>{props.part2} {props.exercises2}</li>
        <li>{props.part3} {props.exercises3}</li>
      </ul>
      </>
    )
  }

  const Total = (props) => {
    return (
      <h1>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</h1>
    )
  }

  return (
    <div>
     <Header course= {course} />
     <Content part1={part1} part2={part2} part3={part3}  />
     <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />

    </div>
  )
}

export default App