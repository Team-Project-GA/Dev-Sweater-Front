import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price, order }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51HrE44L2U82glnTctIrx2JUyDW0bxbUOjku0zEbSlxDQj4NNlApmhtLS2PAdHVzPoCVBvfxBJkwwkLxG5pnO9xmy00g9ni8j92'

  const onToken = token => {
    console.log('this is the token from stripe button', token, order)
    alert('Payment Succesful!')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Dev-Sweater'
      image='https://logos.textgiraffe.com/logos/logo-name/21488178-designstyle-panda-l.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
