import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/Cartcontext";

function ProductCard({ product }) {
  const { setCart } = useContext(CartContext);
  const addTocart = () => {setCart((prevCart) => [...prevCart,product]);
  };
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-52 items-center justify-center bg-gray-100 p-4">
        <img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain transition duration-300 hover:scale-105"/>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="truncate text-lg font-semibold text-gray-900">{product.title}</h2>
        <p className="mt-2 text-xl font-bold text-blue-600">₹{product.price}</p>
        <p className="mt-1 text-sm text-gray-500">Rating: {product.rating}</p>
        <div className="mt-auto flex gap-2 pt-5">
        <button onClick={addTocart} className="flex-1 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">Add to Cart</button>
        <Link to={`/products/${product.id}`} className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;