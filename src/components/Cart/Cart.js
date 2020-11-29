import React from 'react'

const Cart = ({ onAdd, cartItems }) => {
  console.log('cartitems', cartItems)
  return (
    <div>
      {cartItems.length === 0 ? <h1>Cart is Empty</h1> : cartItems.map(cartItem => (
        <h1 key={cartItem._id}>{cartItem.name}</h1>
      ))}
    </div>
  )
}

export default Cart
