import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (<div className="flex min-h-[60vh] items-center justify-center bg-gray-50">
          <h2 className="text-lg font-medium text-gray-600">Loading...</h2>
        </div>);
  }

   return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg md:grid-cols-2">
          <div className="flex h-112.5 items-center justify-center bg-gray-100 p-8">
            <img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain"/>
          </div>
          <div className="flex flex-col justify-center p-8">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="mt-5 leading-7 text-gray-600">{product.description}</p>
            <h2 className="mt-6 text-3xl font-bold text-blue-600">₹{product.price}</h2>
            <p className="mt-4 text-sm font-medium text-gray-600">Rating:{product.rating}</p>
            <p className="mt-2 text-sm font-medium text-gray-600">Stock: {product.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;