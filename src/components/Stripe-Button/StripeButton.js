import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({
  price,
  order,
  onOrder,
  cartItems,
  setCartItems,
  history
}) => {
  const [purchase, setPurchase] = useState(false)
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51HrE44L2U82glnTctIrx2JUyDW0bxbUOjku0zEbSlxDQj4NNlApmhtLS2PAdHVzPoCVBvfxBJkwwkLxG5pnO9xmy00g9ni8j92'

  const onToken = token => {
    setTimeout(() => {
      setCartItems([])
    }, 1000)
    onOrder(cartItems)
    return token && setPurchase(true)
    // console.log('this is the token from stripe button', token, order)
    // alert('Payment Succesful!')
  }
  if (purchase === true) {
    return <Redirect to='/orders' />
  } else {
    return (
      <StripeCheckout
        label='Pay Now'
        name='Dev-Sweater'
        image='https://logos.textgiraffe.com/logos/logo-name/21488178-designstyle-panda-l.png'
        description={`Your total is $${price}`}
        allowRememberMe={false}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}>
        <button
          style={{ marginBottom: '2rem' }}
          className='btn btn-outline-primary btn-block btn-lg'>
          <span className='p-10'>Checkout</span>
        </button>
      </StripeCheckout>
    )
  }
}

export default StripeCheckoutButton
