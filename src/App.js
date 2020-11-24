// import react components etc.
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
// Import the `uuid` package to create unique IDs with
import { v4 as uuid } from 'uuid'

// Import custom components
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import MovieIndex from './components/Movies/MovieIndex'
import MovieCreate from './components/Movies/MovieCreate'
import MovieShow from './components/Movies/MovieShow'
import MovieUpdate from './components/Movies/MovieUpdate'

class App extends Component {
  constructor () {
    super()
    // Set up state
    // `user` is set to `null`
    // `msgAlerts` is set to `[]`
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  // setUser will take in a user object
  // and set the `user` state to hold that object
  // This will be used on sign in
  setUser = user => this.setState({ user })

  // clearUser will set the `user` state to be null
  // This will be used on sign out
  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    // Removed message alert object from state based on an ID value
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  // You will use this function whenever you want to display a message alert
  // It accepts a heading (string), message (string), and variant (string)
  msgAlert = ({ heading, message, variant }) => {
    // Create a unique ID for the message alert
    const id = uuid()
    // Adds the message alert object to the current array of message alerts
    // stored on `App`'s state
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/movies' render={() => (
            <MovieIndex
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/movie-create' render={() => (
            <MovieCreate
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/movie-show/:movieId' render={({ match }) => (
            <MovieShow
              user={user}
              msgAlert={this.msgAlert}
              match={match}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/movie-update/:movieId' render={({ match, history }) => (
            <MovieUpdate
              match={match}
              history={history}
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
        </main>
      </Fragment>
    )
  }
}

export default App
