import { useState } from "react";

function Counter(){
  const [count,setCount] = useState(0);
  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count -1);
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div>
      <div>
        <h2>Count: {count}</h2>
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
    </div>
  )
}

export default Counter;