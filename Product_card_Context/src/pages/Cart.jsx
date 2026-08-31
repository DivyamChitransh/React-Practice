import { useContext } from "react";
import CartContext from "../context/Cartcontext";
function Cart() {

  const {cart,setCart} = useContext(CartContext);
  const removeCart = (index) => {setCart((prevCart) =>prevCart.filter((_, i) => i !== index))};
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Cart Details</h1>
        {cart.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-gray-500">Your cart is empty</p>
          </div>):(<div className="space-y-5">
            {cart.map((product, index) => (
              <div key={`${product.id}-${index}`} className="flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gray-100 p-3">
                  <img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain"/>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">{product.title}</h2>
                  <p className="mt-2 text-lg font-bold text-blue-600">Price:{product.price}</p>
                  <p className="mt-1 text-sm text-gray-500">Rating:{product.rating}</p>
                </div>
                <button onClick={() => removeCart(index)} className="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600">Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;