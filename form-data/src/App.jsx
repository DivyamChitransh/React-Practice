import { useState } from "react";

function App(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLogin,setIslogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIslogin(true)
  }
  return ( 
    <div>
      <h2>Login Form:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
        </div>
        <div>
        <label>Password:</label>
        <input type="password" vlaue={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
        </div>
      <button type="submit">Submit</button>
      </form>
      {isLogin && (<h2>Logged in with : {email}</h2>)}

    </div>
  )
}

export default App;