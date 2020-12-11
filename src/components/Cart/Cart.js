import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import StripeCheckoutButton from '../Stripe-Button/StripeButton'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart = ({
  totalPrice,
  onRemove,
  cartItems,
  order,
  onOrder,
  onAdd,
  setCartItems,
  setOrder
}) => {
  useEffect(() => {
    const notify = () => {
      toast.dark(`YOU HAVE ${cartItems.length} ITEMS IN YOUR CART!`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000
      })
    }
    notify()
    // console.log('on add button', onAdd)
  }, [])
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
      <ToastContainer />
      {cartItems.length !== 0 &&
        <StripeCheckoutButton
          setOrder={setOrder}
          setCartItems={setCartItems}
          order={order}
          price={totalPrice}
          onOrder={onOrder}
          cartItems={cartItems}
        />
      }
      {cartItems.length === 0 ? (
        <h1 style={{ textAlign: 'center' }}>Cart is Empty</h1>
      ) : (
        cartItems.map(cartItem => (
          <div style={{ textAlign: 'center' }} key={cartItem._id}>
            <h1>{cartItem.name}</h1>
            <img style={{ height: '150px', width: '150px' }} src={cartItem.img} alt={cartItem.name}></img>
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
                  // console.log('on add button', onAdd)
                  onAdd(cartItem)
                }}>
                Add
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Cart
