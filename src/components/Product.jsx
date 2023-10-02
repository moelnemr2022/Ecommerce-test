import './Product.css'
import { Link } from 'react-router-dom';

function Product(props){

   const { product,addToCart } = props;
  // console.log(tego);
  
  return (
    <>
    <div className="product-card-div">
    <div className="card">
  <img src={product.image} className="card-img-top" alt={product.title}/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.price}</p>
    <Link to={`/products/${product.id}`} className="btn btn-primary">Product Details</Link>
<button onClick={()=>addToCart(product.id)}>add To Cart</button>
  </div>
</div>
</div>
    </>
  );
}

export default Product;
