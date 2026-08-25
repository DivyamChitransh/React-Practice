import ProductCard from "./ProductCard";
function ProductList({products,addTocart}){
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard key = {product.id} product = {product} addTocart = {addTocart}/>
            ))}
        </div>
    )
}

export default ProductList;