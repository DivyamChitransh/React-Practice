import { useState } from "react";
function Character(){
  const [text,setText] = useState("");
  return (
    <div>
      <h2>Write Something here...</h2>
      <div>
      <textarea placeholder="Write Something here..." value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
    <p>Charaxters:{text.length}</p>
    </div>
  )
}

export default Character;