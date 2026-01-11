import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  const increment = () => setNum(num + 1)
  const decrement = () => setNum(num - 1)
  const incrementby5=()=> setNum(num + 5)

  return (
    <div className="container">
      <h1 className="count">{num}</h1>

      <div className="btn">
        <button className="inc" onClick={increment}>+</button>
        <button className="dec" onClick={decrement}>−</button>
        <button className="incby5" onClick={incrementby5}>5+</button>
      </div>
    </div>
  )
}

export default App
