import {useState } from "react";

function App(){
  const [count,setCount] = useState(0);
  const increase = () => {
    setCount((prev) => prev +1)
    setCount((prev) => prev +1)
    setCount((prev) => prev +1)
  }
  return (
    <div>
      <p>Count:{count}</p>
      <div>
        <button onClick={increase}>Increase</button>
      </div>
    </div>
  )
}

export default App;
