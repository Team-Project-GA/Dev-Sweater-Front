// import react components etc.
import React, { Fragment, useState } from 'react'
import { Route } from 'react-router-dom'

// Import custom components
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import MovieIndex from './components/Movies/MovieIndex'
import MovieCreate from './components/Movies/MovieCreate'
import MovieShow from './components/Movies/MovieShow'
import MovieUpdate from './components/Movies/MovieUpdate'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import { indexProducts } from './api/products'
import ProductCreate from './components/Products/ProductCreate'

const App = () => {
  const [user, setUsers] = useState(null)
  const [cartItems, setCartItems] = useState([])

  const onAddToCart = product => {
    const productExist = cartItems.find(
      (cartElement) => cartElement._id === product._id
    )
    if (productExist) {
      setCartItems(
        cartItems.map(cartElement => cartElement._id === product._id ? {
          ...productExist, qty: productExist.qty + 1
        } : cartElement)
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemoveFromCart = product => {
    const productExist = cartItems.find(
      (cartElement) => cartElement._id === product._id
    )
    if (productExist.qty === 1) {
      setCartItems(cartItems.filter((cartElement) => cartElement._id !== product._id))
    } else {
      setCartItems(
        cartItems.map((cartElement) =>
          cartElement._id === product._id ? { ...productExist, qty: productExist.qty - 1 } : cartElement)
      )
    }
  }

  // setUser will take in a user object
  // and set the `user` state to hold that object
  // This will be used on sign in
  const setUser = user => setUsers(user)

  // clearUser will set the `user` state to be null
  // This will be used on sign out
  const clearUser = () => setUsers(null)

  return (
    <Fragment>
      <Header cartCount={cartItems.length} user={user} />
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
        <Route path='/sign-in' render={() => <SignIn setUser={setUser} />} />
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
          render={() => <Cart onAdd={onAddToCart} onRemove={onRemoveFromCart} cartItems={cartItems} user={user} />}
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
          )}
        />
      </main>
    </Fragment>
  )
}

export default App
