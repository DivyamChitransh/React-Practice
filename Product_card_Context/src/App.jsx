import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Protected from "./components/ProtectedRoutes";
import CartContextProvider from "./context/CartcontextProvider"

function App() {
  const location = useLocation();
  const isLogin = location.pathname === "/";
  return (
    <CartContextProvider>
      {!isLogin && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Protected><Products /></Protected>}/>
        <Route path="/products/:id" element={<Protected><ProductDetails /></Protected>}/>
        <Route path="/cart" element={<Protected><Cart /></Protected>}/>
        <Route path="/" element={<Login />}/>
      </Routes>
      {!isLogin && <Footer />}
    </CartContextProvider>
  );
}

export default App;