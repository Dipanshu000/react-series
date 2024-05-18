import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0;
  const [counter,setCounter] = useState(0);

  const addValue = ()=>{
    // counter=counter+1;
    if(counter+1<=20){
      setCounter(counter+1);
      // setCounter(prevcounter=>prevcounter+1);
      // setCounter(prevcounter=>prevcounter+1);
      // setCounter(prevcounter=>prevcounter+1);  Directly update +3
    }
    // console.log(counter);
  }

  const subtractValue = ()=>{
    if(counter-1>=0)
    setCounter(counter-1);
    else
    setCounter(0);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase</button>
      <br /> 
      <button onClick={subtractValue}>Decrease</button>
    </>
  )
}

export default App
