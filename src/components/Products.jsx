import { useState, useEffect } from 'react';

import Product from './Product';
import Cart from './Cart';
import './Products.css'

function Products() {
  const apiUrl = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [Categories,setCategories] = useState([]);

  function getcategories (){
    fetch(`${apiUrl}/Categories`)
      .then((res) => res.json())
      .then((data) => {setCategories(data)
      console.log("########",data)})
  }
  
  // get product by categories

  function getProductCategory(cat){
    fetch(`${apiUrl}/category/${cat}`)
    .then((res) => res.json())
    .then((data) => {setProducts(data)
    console.log("####productc####",data)})
  }
//////get all products
  function getAllProduct(){
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setProducts(data))
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  useEffect(() => {
    getAllProduct()
      getcategories();
  }, []);

  return (
    <div>
      <h1>Lightning deals</h1>
   <div className="cat-btn-div">
    {
     Categories.map((item)=>{
      
      return <button onClick={()=>getProductCategory(item)} className='btn-cat mx-1 focus' key={item}>{item}</button>

     }) 
    }

<button onClick={getAllProduct}>All Products</button>
   </div>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3 px1 py-2">
              <Product product={product} addToCart={() => addToCart(product)} />
            </div>
          ))}
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default Products;
