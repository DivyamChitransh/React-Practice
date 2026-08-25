import { Routes, Route,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Protected from "./components/ProtectedRoutes";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const getUsernameFromCookie = () => {
    const cookies = document.cookie.split("; ");
    const usernameCookie = cookies.find((cookie) => cookie.startsWith("username="));
    return usernameCookie?decodeURIComponent(usernameCookie.split("=")[1]):null;
  };
  const [username, setUsername] = useState(getUsernameFromCookie());
  const [cart, setCart] = useState(() => {
  const currentUsername = getUsernameFromCookie();
    if (!currentUsername) { return []}
    const savedCart = localStorage.getItem(`cart_${currentUsername}`);
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const isLogin = location.pathname === "/"
  useEffect(() => {
    if (!username) {
      return
    }
    localStorage.setItem(`cart_${username}`,JSON.stringify(cart))
  }, [cart, username]);
  const addTocart = (product) => {
    setCart((prevCart) => [...prevCart,product])
  }
  const removeCart = (index) => {
    setCart((prevCart) => prevCart.filter((_,i) => i !== index))
  }
  return (
    <>
      {!isLogin && <Navbar Count = {cart.length}/>}
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Protected><Products addTocart={addTocart}/></Protected>}/>
        <Route path="/products/:id" element={<Protected><ProductDetails /></Protected>}/>
        <Route path="/cart" element={<Protected><Cart cart={cart} removeCart={removeCart} /></Protected>}/>
        <Route path="/" element={<Login updateUsername={setUsername} updateCart={setCart}/>}/></Routes>
      {!isLogin && <Footer />}
    </>
  );
}

export default App;