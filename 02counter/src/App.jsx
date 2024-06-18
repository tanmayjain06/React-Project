import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)
  //let counter = 5

  const addValue = () => {
    
    //counter = counter + 1
    setCounter(counter +1)
    console.log("Clicked", counter);
  }

  const removeValue = () => {
    
    setCounter(counter - 1)
    console.log("Clicked", counter);
  }

  return (
    <>
      
      <h1>tanmay aur react</h1>
      <h2>counter value: {counter}      </h2>

      <button
      onClick={addValue}>
        Add Value</button>
      <br />
      <button
      onClick={removeValue}>
        Remove value</button>
    </>
  )
}

export default App
