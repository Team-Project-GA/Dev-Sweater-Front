import React from 'react'

const OrderHistory = ({ order, onAdd }) => {
  console.log('this is order in order history', order)
  return (
    <div>
      {order.length === 0 ? (
        <h1>You have no orders</h1>
      ) : (
        order.map(item => (
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
