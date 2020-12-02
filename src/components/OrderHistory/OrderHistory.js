import React from 'react'

const OrderHistory = ({
  showOrders,
  order,
  user,
  cartItems,
  setOrder,
  onAdd
}) => {
  console.log('this is order in order history', order)

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
        <h1>You have no orders</h1>
      ) : (
        order.map(item => (
          <div style={{ textAlign: 'center' }} key={item._id}>
            <h1>{item.name}</h1>
            <img src={item.img} alt={item.name}></img>
            <h3>${item.price}</h3>
            <h5>Quantity: {item.qty}</h5>
          </div>
        ))
      )}
    </div>
  )
}

export default OrderHistory
