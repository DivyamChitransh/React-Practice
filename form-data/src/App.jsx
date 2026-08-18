import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <div className="page">
      <div className="login-card">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
          </div>
          <button type="submit">Login</button>
        </form>
        {isLogin && (
          <h2 className="success">Login Successful</h2>
        )}
      </div>
    </div>
  );
}

export default App;