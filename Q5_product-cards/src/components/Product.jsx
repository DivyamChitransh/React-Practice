function Product({name,price,category,rating}){
return (
    <div>
        <h1>Products Listing</h1>
        <div>
            <h2>Products Name: {name}</h2>
            <p>Price : {price}</p>
            <p>Category:{category}</p>
            <p>Rating:{rating}</p>
        </div>
    </div>
)
}

export default Product;