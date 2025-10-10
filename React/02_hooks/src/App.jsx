import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  
  const addValue = function(){
    console.log("add value",counter)
    setCounter(counter + 1)
  }
  const subCounter = function(){
    console.log("add value",counter)
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Sid Learning React</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={subCounter}>Remove Value</button>
    </>
  )
}

export default App
