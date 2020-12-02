import React from 'react'

const OrderHistory = ({ showOrders, order, user, cartItems, setOrder, onAdd }) => {
  console.log('this is order in order history', order)

  // useEffect(() => {
  //   showOrders(user, cartItems.owner).then(res => {
  //     console.log('res from orderHistory component', res)
  //   }).catch(() => console.error)
  // }, [])

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
