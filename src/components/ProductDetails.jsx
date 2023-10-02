import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import './productDetails.css'

export default function ProductDetails() {
const params = useParams()
const ApiUrl = 'https://fakestoreapi.com/products'
const[product,setProduct]=useState([])

useEffect(() => {
  fetch(`${ApiUrl}/${params.productId}`)
    .then(res => res.json())
    .then(data => {setProduct(data)
    console.log("------------",data);
    })
}, [])

console.log("++++++++",params);

  return (
    <>
    <div>ProductDetails</div>
  <div className="product-d-c row d-flex justify-content-center">
    <div className="card w-30">
    <img src={product.image} className="card-img-top" alt={product.title}/>
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.price}</p>
      <p className="card-text">{product.description}</p>

      
    </div>
  </div>
  </div>
  </>
  )
}




