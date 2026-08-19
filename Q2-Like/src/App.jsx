import { useState } from "react";

function Like(){
  const [Like,setLike] = useState(0);
  const [dislike,setDislike] = useState(0);
  const Likes = () => {
    setLike(Like+1);
  }
  const dislikes = () => {
    setDislike(dislike+1);
  }
  return (
    <div>
      <h2>Total Likes : {Like}</h2>
      <h2>Total Dislikes : {dislike}</h2>
      <div>
        <button onClick={Likes}>Like</button>
        <button onClick={dislikes}>Dislike</button>
      </div>
    </div>
  )
}

export default Like;