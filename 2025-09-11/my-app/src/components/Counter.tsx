import { useState } from "react"

import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 100)}>+100</button>
        <button onClick={() => setCount(count + 50)}>+50</button>
        <button onClick={() => setCount(count + 25)}>+25</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button>count is: {count}</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count - 25)}>-25</button>
        <button onClick={() => setCount(count - 50)}>-50</button>
        <button onClick={() => setCount(count - 100)}>-100</button>
      </div>
    </>
  )
}

export default Counter
