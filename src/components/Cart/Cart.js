import React from 'react'

const Cart = ({ products, user }) => {
  console.log('products in cart component:', products)
  console.log('user in cart component:', user)
  return (
    <div>
      <h1>this is the cart page</h1>
    </div>
  )
}

export default Cart
