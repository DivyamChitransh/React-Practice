import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/products");
    };
    return (
        <button onClick={handleLogin}>Login</button>
    )
}

export default Login;