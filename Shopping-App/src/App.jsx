import Cart from "../src/components/Cart.jsx"

function App() {
  return (
    <div>
      <Cart
        name="MacBook Air"
        price={90000}
        description="Apple laptop with M-series processor"
      />

      <Cart
        name="Dell Inspiron"
        price={60000}
        description="Powerful laptop for students"
      />

      <Cart
        name="HP Pavilion"
        price={65000}
        description="Good laptop for everyday use"
      />
    </div>
  );
}

export default App;