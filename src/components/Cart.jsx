import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price} €
           
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p> Total Price: {totalPrice.toFixed(2)} €</p>
    </div>
  );
}

export default Cart;


