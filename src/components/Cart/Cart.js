import React from 'react'
import { Button } from 'react-bootstrap'
import StripeCheckoutButton from '../Stripe-Button/StripeButton'

const Cart = ({ totalPrice, onRemove, cartItems, order, onOrder, onAdd, setCartItems }) => {
<<<<<<< HEAD
  // console.log('cartitems', cartItems)

<<<<<<< HEAD
=======
const Cart = ({ onAdd, orders, onRemove, cartItems, onOrder, order }) => {
  console.log('cartitems', cartItems)
>>>>>>> 564e345... order history try
=======
  console.log('cartitems', cartItems)
>>>>>>> ab4437e... Latest commit
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '3rem',
          paddingBottom: '1.5rem',
          borderBottom: 'solid 3px black'
        }}>
        Your Total is: ${totalPrice}
      </h2>
      <StripeCheckoutButton order={order} price={totalPrice} onOrder={onOrder} cartItems={cartItems} />
      {cartItems.length === 0 ? (
        <h1 style={{ textAlign: 'center' }}>Cart is Empty</h1>
      ) : (
        cartItems.map(cartItem => (
          <div style={{ textAlign: 'center' }} key={cartItem._id}>
            <h1>{cartItem.name}</h1>
            <img className='img' src={cartItem.img} alt={cartItem.name}></img>
            <h3>${cartItem.price}</h3>
            <h5>Quantity: {cartItem.qty}</h5>
            <div className='container btn-sx'>
              <Button
                style={{ margin: '2rem' }}
                variant='outline-primary'
                onClick={() => {
                  // console.log('on remove button', onRemove)
                  onRemove(cartItem)
                }}>
                Remove
              </Button>
              <Button
                style={{ margin: '2rem' }}
                variant='outline-primary'
                onClick={() => {
<<<<<<< HEAD
                  // console.log('on add button', onAdd)
                  onAdd(cartItem)
                }}>
                Add
=======
                  console.log('on order history button', orders)
                  onOrder(orders)
                }}
                variant='outline-primary'>
                Checkout
>>>>>>> 564e345... order history try
              </Button>
<<<<<<< HEAD
=======
              <StripeCheckoutButton order={order} price={totalPrice} onOrder={onOrder} cartItems={cartItems} setCartItems={setCartItems} />
>>>>>>> ab4437e... Latest commit
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
