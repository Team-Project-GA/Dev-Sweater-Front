import React from 'react'

const Cart = ({ onAdd, cartItems }) => {
  console.log('cartitems', cartItems)
  return (
    <div>
      {cartItems.length === 0 ? <h1 style={{ textAlign: 'center' }}>Cart is Empty</h1> : cartItems.map(cartItem => (
        <div style={{ textAlign: 'center' }} key={cartItem._id}>
          <h1>Name: {cartItem.name}</h1>
          <h3>Price: ${cartItem.price}</h3>
          <h5>Qty: {cartItem.qty}</h5>
        </div>
      ))}
    </div>
  )
}

export default Cart
