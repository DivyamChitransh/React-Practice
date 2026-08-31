import { useState,useEffect } from "react";
import ProductList from "../components/ProductList";
function Products(){
  const [products,setProducts] = useState("")
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  useEffect(() => {fetch("https://dummyjson.com/products")
    .then((response) => {
        if(!response.ok){
            throw new Error("Something Went Wrong")
        }
        return response.json()} )
    .then((data) => {setProducts(data.products); setLoading(false)})
    .catch((error) => {
        setError(error.message);
        setLoading(false);
    })},[])
    if(loading){
        return (<div className="flex min-h-[70vh] items-center justify-center bg-gray-50">
            <p className="text-lg font-medium text-gray-600">Loading Products...</p>
            </div>)
    }
    if(error){
        return (<div className="flex min-h-[70vh] items-center justify-center bg-gray-50">
        <p className="rounded-lg bg-red-50 px-6 py-4 font-medium text-red-600">{error}</p>
        </div>)
    }
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-8">
      <div className="mx-auto max-w-7xl">
        <ProductList products={products}/>
      </div>
    </div>
  );
}

export default Products;