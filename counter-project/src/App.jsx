import { useState } from 'react'

import './App.css'

function App() {
 
  const [counter,setcounter] = useState(0)
  const Addvalue =() =>{
    if(counter < 20){
      setcounter(counter+1)
    }
    else{
      setcounter(0)
    }
  }
  const removevalue =() =>{
    if(counter <1){
      setcounter(0)
    }
    else{
      setcounter(counter-1)
    }
  }

  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value {counter}</h2>

      <button onClick={Addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}> value </button>
    </>
  )
}

export default App
