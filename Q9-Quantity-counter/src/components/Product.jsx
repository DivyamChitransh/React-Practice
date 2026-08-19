import { useState } from "react";
function Product({name,price}){
    const [quantity,setQuantity] = useState(0)

    const increase_count = () => {
        setQuantity(quantity+1);
    }
    const decrease_count = () => {
        setQuantity(quantity-1);
    }
    return (
            <div>
                <p>Product Name: {name}</p>
                <p>Product Price : {price}</p>
                <p>Quanity : {quantity}</p>
                <p>Total : {price*quantity}</p>
                <div>
                <button onClick={increase_count}>+</button>
                <button onClick={decrease_count}>-</button>
                </div>
            </div>
    )
}

export default Product;