import { useEffect, useState } from "react"

const Practice = () => {

const [a,setA]=useState(0);
const[b,setB]=useState(0);

const aChanging=()=>{
  console.log('A is changing....');
  
}
const bChanging=()=>{
  console.log('B is changing...');
  
}

useEffect(()=>{
  aChanging();
},[a])
useEffect(()=>{
  bChanging()
},[b])
  return (
    <div>
      <h1>practice</h1>
      <h2>A is :{a}</h2>
      <h2>B is :{b}</h2>
      <button onClick={()=>{setA(a+10)}}>Change A</button>
      <button onClick={()=>{setB(b+10)}}>Change B</button>
    </div>
  )
}

export default Practice
