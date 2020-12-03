import React from 'react'

<<<<<<< HEAD
const OrderHistory = ({
  showOrders,
  order,
  user,
  cartItems,
  setOrder,
  onAdd
}) => {
  // console.log('this is order in order history', order)

  // useEffect(() => {
  //   showOrders(user, cartItems.owner).then(res => {
  //     console.log('res from orderHistory component', res)
  //   }).catch(() => console.error)
  // }, [])

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
        Order History
      </h2>
      {order.length === 0 ? (
=======
const OrderHistory = ({ cartItems, onOrder, orders }) => {
  console.log('this is order component cart items', cartItems)
  return (
    <div>
      {orders.length === 0 ? (
>>>>>>> 564e345... order history try
        <h1>You have no orders</h1>
      ) : (
        order.map(item => (
          <div style={{ textAlign: 'center' }} key={item._id}>
<<<<<<< HEAD
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name}></img>
            <h3>${item.price}</h3>
            <h5>Quantity: {item.qty}</h5>
=======
            <h1>
              View your order from
              {Date()}
            </h1>
            <img src={item.img} alt={item.name}></img>
            <h1>Name: {item.name}</h1>
            <h3>Price: ${item.price}</h3>
            <h5>Qty: {item.qty}</h5>
            <button
              onClick={() => {
                console.log('order history', item)
              }}>
              press
            </button>
>>>>>>> 564e345... order history try
          </div>
        ))
      )}
    </div>
  )
}

export default OrderHistory
