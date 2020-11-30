import React from 'react'

const OrderHistory = ({ cartItems, onAdd }) => {
  console.log('this is order component cart items', cartItems)
  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>You have no orders</h1>
      ) : (
        cartItems.map(item => (
          <div style={{ textAlign: 'center' }} key={item._id}>
            <img src={item.img} alt={item.name}></img>
            <h1>Name: {item.name}</h1>
            <h3>Price: ${item.price}</h3>
            <h5>Qty: {item.qty}</h5>
          </div>
        ))
      )}
    </div>
  )
}

export default OrderHistory
