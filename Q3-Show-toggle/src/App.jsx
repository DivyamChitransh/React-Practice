import { useState } from "react";

function App(){
  const [show,setShow] = useState(false)
  const Showtoggle = () => {setShow(!show)};
  return (
    <div>
      <button onClick={Showtoggle}>Hide/Show</button>
      {show && <p>Hello World</p>} 
    </div>
  )
}

export default App;