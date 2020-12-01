import React from 'react'
import { Button } from 'react-bootstrap'

const Cart = ({ onAdd, onRemove, cartItems, order, onOrder }) => {
  console.log('cartitems', cartItems)
  return (
    <div>
      {cartItems.length === 0 ? (
        <h1 style={{ textAlign: 'center' }}>Cart is Empty</h1>
      ) : (
        cartItems.map(cartItem => (
          <div style={{ textAlign: 'center' }} key={cartItem._id}>
            <h1>Name: {cartItem.name}</h1>
            <h3>Price: ${cartItem.price}</h3>
            <h5>Qty: {cartItem.qty}</h5>
            <div className='d-flex justify-content-around'>
              <Button
                variant='outline-primary'
                onClick={() => {
                  console.log('on remove button', onRemove)
                  onRemove(cartItem)
                }}>
                Remove From Cart
              </Button>
              <Button
                onClick={() => {
                  onOrder(cartItems)
                  console.log('order is: ', order)
                }}
                variant='outline-primary'>
                Checkout
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
