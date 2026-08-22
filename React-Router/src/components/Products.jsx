import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  return <h1>Product ID: {params.id}</h1>;
}

export default Product;