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

// const products = [
//   {
//     id: 1,
//     title: 'Sweater',
//     description: 'soft and wooly',
//     price: 20.0,
//     img:
//       'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4h_YBn4WWsqhV1kj71N3GNbKXtyIWXq4ImaHYOdAzNjPeU_dysGIKp70c3KOTNGkkSMQQhA992A&usqp=CAc'
//   },
//   {
//     id: 2,
//     title: 'Dev Sweater',
//     description: 'hard and rough',
//     price: 25.0,
//     img:
//       'https://i.etsystatic.com/10157633/d/il/9c3c97/2102609728/il_340x270.2102609728_mzgn.jpg?version=0'
//   },
//   {
//     id: 3,
//     title: 'pants',
//     description: 'blue jeans',
//     price: 10.0,
//     img:
//       'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRu3zYgwoY0kkJIQy1Y6Bh0zw0WApSMRe7D1B6LBmnmb_DBQFQDXKU_esvRabWQerdL8sEW_HWkzA&usqp=CAc'
//   },
//   {
//     id: 4,
//     title: 'hat',
//     description: 'snapback hard bill',
//     price: 5.0,
//     img:
//       'https://images-na.ssl-images-amazon.com/images/I/61A6xgIEFaL._AC_UL1000_.jpg'
//   }
// ]

const App = () => {
  const [user, setUsers] = useState(null)

  // setUser will take in a user object
  // and set the `user` state to hold that object
  // This will be used on sign in
  const setUser = user => setUsers(user)

  // clearUser will set the `user` state to be null
  // This will be used on sign out
  const clearUser = () => setUsers(null)

  return (
    <Fragment>
      <Header user={user} />
      <main className='container'>
        <Route
          exact path='/'
          render={() => (
            <Home setUser={setUser} user={user} />
          )}
        />
        <Route
          path='/products'
          render={() => (
            <Products indexProducts={indexProducts} setUser={setUser} user={user} />
          )}
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
          render={() => <Cart user={user} />}
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
