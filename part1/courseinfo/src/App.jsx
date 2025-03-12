import { useState } from "react"


const Header = (props) => 

{
  console.log(props)
return
<h1>{props.course}</h1>
}

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Content = (props) => (
  <div>
    <Part name={props.part1} exercises={props.exercises1} />
    <Part name={props.part2} exercises={props.exercises2} />
    <Part name={props.part3} exercises={props.exercises3} />
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
)

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
  

const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering with counter value', counter)

  const increaseByOne = () => {

    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 

    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {

    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}
export default App
