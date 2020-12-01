import React from 'react'
import { Button } from 'react-bootstrap'
import StripeCheckoutButton from '../Stripe-Button/StripeButton'

const Cart = ({ totalPrice, onRemove, cartItems, order, onOrder }) => {
  console.log('cartitems', cartItems)

  return (
    <div>
      <h5
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '3rem',
          paddingBottom: '1.5rem',
          borderBottom: 'dotted 3px black'
        }}>
        Your Total is: ${totalPrice}
      </h5>
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
              <StripeCheckoutButton order={order} price={totalPrice} />
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
