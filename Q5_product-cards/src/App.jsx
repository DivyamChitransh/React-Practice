import Product from "./components/Product";

function App(){
  return (
    <div>
      <Product name ="Desktop" price="250000" category="Electronics" rating="5"/>
      <Product name ="Laptop" price="150000" category="Electronics" rating="5"/>
      <Product name ="Formal Suit" price="7500" category="Clothing" rating="5"/>
      <Product name ="Home Ration" price="2500" category="Grocery" rating="5"/>
      <Product name ="Scooty" price="145000" category="Vehicle" rating="5"/>
    </div>
  )
}

export default App;