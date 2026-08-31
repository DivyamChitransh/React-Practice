import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/Cartcontext";

function Navbar(){
    const navigate = useNavigate();
    const {cart} = useContext(CartContext);
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
        <nav className="border-b border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-end px-8 py-4">
                <div className="flex items-center gap-3">
                    <Link to="/home" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600">Home</Link>
                    <Link to="/products" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600">Product</Link>
                    <Link to="/cart" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600">Cart ({cart.length})</Link>
                    <Link to="/" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600">Login</Link>
                    <button onClick={handleLogout} className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600">Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;