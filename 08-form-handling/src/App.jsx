import './index.css'
const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Hello")
  }
  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input className="name" type="text" placeholder="Enter your name"></input>
        <input className="no" type="text" placeholder="Enter valid number"></input>
        <input className="email" type="text" placeholder="Enter valid email address"></input>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default App
