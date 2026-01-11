import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Practice from './Practice'

const App = () => {

  const [num,setNum]=useState(0)
  const [num2,setNum2]=useState(0)

  useEffect(function(){
    console.log("Use effect is running....");
    
  },[num])
  return (
    <div>
      <h1>num:{num}</h1>
      <h2>num2:{num2}</h2>
      <button onClick={()=>{setNum(num+1)}}>click me</button>
      <button onClick={()=>{setNum2(num2+100)}}>click me</button>
  
    <div><Practice/></div>
    </div>
  )
}

export default App
