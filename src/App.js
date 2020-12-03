// import react components etc.
import React, { Fragment, useState } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// Import custom components
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import { indexProducts } from './api/products'
import { showOrders } from './api/orderHistory'
import ProductCreate from './components/Products/ProductCreate'
import OrderHistory from './components/OrderHistory/OrderHistory'

const App = () => {
  const [user, setUsers] = useState(null)
  const [cartItems, setCartItems] = useState([])
<<<<<<< HEAD
  const [order, setOrder] = useState([])
  const [msgAlerts, setMsgAlerts] = useState([])
=======
  const [orders, setOrders] = useState([])

  const onOrder = product => {
    const productExist = orders.find(
      cartElement => cartElement._id === product._id
    )
    if (productExist) {
      setOrders(
        orders.map(cartElement =>
          cartElement._id === product._id
            ? {
              ...productExist,
              qty: productExist.qty + 1
            }
            : cartElement
        )
      )
    } else {
      setOrders([...orders, { ...product, orderQty: 1 }])
    }
  }
>>>>>>> 564e345... order history try

  const onAddToCart = product => {
    const productExist = cartItems.find(
      cartElement => cartElement._id === product._id
    )
    if (productExist) {
      setCartItems(
        cartItems.map(cartElement =>
          cartElement._id === product._id
            ? {
              ...productExist,
              qty: productExist.qty + 1
            }
            : cartElement
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemoveFromCart = product => {
    const productExist = cartItems.find(
      cartElement => cartElement._id === product._id
    )
    if (productExist.qty === 1) {
      setCartItems(
        cartItems.filter(cartElement => cartElement._id !== product._id)
      )
    } else {
      setCartItems(
        cartItems.map(cartElement =>
          cartElement._id === product._id
            ? { ...productExist, qty: productExist.qty - 1 }
            : cartElement
        )
<<<<<<< HEAD
      )
    }
  }

  const onOrder = product => {
    const orderExist = order.find(
      cartElement => cartElement._id === product._id
    )
    if (orderExist) {
      setOrder(
        order.map(cartElement =>
          cartElement._id === product._id
            ? {
              ...orderExist,
              qty: orderExist.qty + 1
            }
            : cartElement
        )
=======
>>>>>>> 564e345... order history try
      )
    } else {
      setOrder([...order, ...product])
    }
  }

  // setUser will take in a user object
  // and set the `user` state to hold that object
  // This will be used on sign in
  const setUser = user => setUsers(user)

  // clearUser will set the `user` state to be null
  // This will be used on sign out
  const clearUser = () => setUsers(null)

  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  // console.log('total price is', totalPrice)

  const deleteAlert = (id) => {
    setMsgAlerts((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  return (
    <Fragment>
      <Header cartCount={cartItems.length} user={user} />
      {msgAlerts.map((msgAlert, index) => (
        <AutoDismissAlert
          key={index}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
        />
      ))}
      <main className='container'>
        <Route
          exact
          path='/'
          render={() => <Home setUser={setUser} user={user} />}
        />
        <Route
          path='/products'
          render={() => (
            <Products
              onAdd={onAddToCart}
              onRemove={onRemoveFromCart}
              indexProducts={indexProducts}
              setUser={setUser}
              user={user}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/product-create'
          render={() => <ProductCreate user={user} />}
        />
        <Route path='/sign-up' render={() => <SignUp setUser={setUser} />} />
        <Route path='/sign-in' render={() => <SignIn setUser={setUser} msgAlert={msgAlert}/>} />
        <AuthenticatedRoute
          user={user}
          path='/sign-out'
          render={() => <SignOut clearUser={clearUser} user={user} />}
        />
        <AuthenticatedRoute
          user={user}
          path='/change-password'
          render={() => <ChangePassword user={user} />}
        />
        <AuthenticatedRoute
          user={user}
          path='/cart'
          render={() => (
            <Cart
<<<<<<< HEAD
              setCartItems={setCartItems}
              totalPrice={totalPrice}
              onAdd={onAddToCart}
              onRemove={onRemoveFromCart}
              cartItems={cartItems}
              order={order}
              onOrder={onOrder}
=======
              onOrder={onOrder}
              onAdd={onAddToCart}
              onRemove={onRemoveFromCart}
              cartItems={cartItems}
>>>>>>> 564e345... order history try
              user={user}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/orders'
          render={() => (
            <OrderHistory
<<<<<<< HEAD
              totalPrice={totalPrice}
              order={order}
              onAdd={onAddToCart}
              onRemove={onRemoveFromCart}
              cartItems={cartItems}
              user={user}
              showOrders={showOrders}
              setOrder={setOrder}
            />
=======
              onOrder={onOrder}
              onRemove={onRemoveFromCart}
              cartItems={cartItems}
              orders={orders}
              user={user}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path='/movies'
          render={() => <MovieIndex user={user} />}
        />
        <AuthenticatedRoute
          user={user}
          path='/movie-create'
          render={() => <MovieCreate user={user} />}
        />
        <AuthenticatedRoute
          user={user}
          path='/movie-show/:id'
          render={({ match }) => <MovieShow user={user} match={match} />}
        />
        <AuthenticatedRoute
          user={user}
          path='/movie-update/:movieId'
          render={({ match, history }) => (
            <MovieUpdate match={match} history={history} user={user} />
>>>>>>> 564e345... order history try
          )}
        />
      </main>
    </Fragment>
  )
}

export default App
