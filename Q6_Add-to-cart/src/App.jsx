import { useState } from "react";

function App() {
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    setIsAdded(true);
  };

  return (
    <div>
      <button onClick={addToCart}>
        Add
      </button>
      {isAdded && <h2>Added to cart</h2>}
    </div>
  );
}

export default App;