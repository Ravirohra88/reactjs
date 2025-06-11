import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setcounter ] = useState(15) 
  const Addvalue = ()=>{
      if (counter <= 19) {
        
      counter =  counter + 1;
    setcounter ( counter)
        
      }
        }
  const minus =  () =>{
  
    if (counter > 0 ){
        counter =  counter-1;
    setcounter(counter)
    }
    
  }

  return (
    <>      
        <h1>ravi's counter project</h1>
        <h2>count value : {counter} </h2>
        <button onClick={Addvalue}>add + </button>
        <button onClick={minus}>less -</button>
    </>
  )
}

export default App
