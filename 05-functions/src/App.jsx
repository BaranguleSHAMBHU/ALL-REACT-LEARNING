const App = () => {
  return (
    <div>
      <button onClick={()=>{console.log("hello")}}>Click me</button>
      <input onChange={()=>console.log("typing")} type="text" placeholder="name"/>
    </div>
  )
}

export default App
