import Product from "./components/Product";

function App(){
  return (
    <div>
      <nav><h1>Product Cart</h1></nav>
      <div>
      <Product name="T-shirt" price="500"/>
      <Product name="shirt" price="800"/>
      <Product name="Jeans" price="1500"/>
      </div>
    </div>
  )
}

export default App;