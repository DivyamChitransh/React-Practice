import { useState } from "react";

function Forms(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [isLogin,setIslogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIslogin(true)
  }
  return (
    <div>
      <h1>Forms:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email"/>
          <label>Password:</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isLogin && <p>Form Submitted successfully : {email}</p>}
    </div>
  )
}

export default Forms;