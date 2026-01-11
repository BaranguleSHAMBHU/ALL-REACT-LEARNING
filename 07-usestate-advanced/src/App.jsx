import React from 'react'
import { useState } from 'react'

const App = () => {

  const[num,setNum]=useState(10);
  const increment=()=>{
      setNum(prev=>(prev+1));
     
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increment}>Click me</button>
    </div>
  )
}

export default App
