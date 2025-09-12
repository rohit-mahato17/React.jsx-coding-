import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(15)

  const addValue = () => {
    if (count < 20) {  
      setCounter(count + 1)
    }
  }

  const removeValue = () => {
    if (count > 0) {  
      setCounter(count - 1)
    }
  }

  return (
    <>
      <h1>React aur JSX</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value {count}</button>

      <p>footer: {count}</p>
    </>
  )
}

export default App
