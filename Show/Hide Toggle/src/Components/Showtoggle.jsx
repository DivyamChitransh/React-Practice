import { useState } from "react";

function Showtoggle({message}){
  const [show,setShow] = useState(true)
  const toggle = () => {setShow(!show)};
  return (
    <div>
      <button onClick={toggle}>Show/Hide</button>
      {show && (<h2>{message}</h2>)}
    </div>
  )
}

export default Showtoggle;