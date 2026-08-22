
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Product from "./components/Products";

function Home(){
  return <h1>Home Page</h1>
}

function About(){
  return <h1>About Page</h1>
}

function Contact(){
  return <h1>Contacts Page</h1>
}

function App(){
  return (
    <>
      <Navbar />
    <Routes>
      <Route path = "/" element = {<Home />}></Route>
      <Route path = "/about" element = {<About />}></Route>
      <Route path = "/contact" element = {<Contact />}></Route>
      <Route path = "/product" element = {<Product />}></Route>
      <Route path = "/login" element = {<Login />}></Route>
    </Routes>
    </>
  )
}

export default App;


