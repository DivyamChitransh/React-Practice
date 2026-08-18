function Cart(props){
    return (
        <div>
            <h1>Laptop Store:</h1>
            <div>
                <h2>Laptop Name : {props.name}</h2>
                <p>Price:Rs.{props.price}</p>
                <p>Description:{props.description}</p>
            </div>
        </div>
    )
}

export default Cart;