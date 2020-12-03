import React, { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const OrderHistory = ({
  showOrders,
  order,
  user,
  cartItems,
  setOrder,
  onAdd
}) => {
  // console.log('this is order in order history', order)

  useEffect(() => {
    const notify = () => {
      const today = new Date()
      toast.dark(
        `YOU HAVE ${order.length} ORDERS FROM ${
          today.toISOString().split('T')[0]
        }!`,
        {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2500
        }
      )
    }
    return notify()
    // console.log('on add button', onAdd)
  }, [])
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '3rem',
          paddingBottom: '1.5rem',
          borderBottom: 'solid 3px black'
        }}>
        Order History
      </h1>
      <ToastContainer />
      {order.length === 0 ? (
        <h1 className='text-center'>You have no orders</h1>
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
