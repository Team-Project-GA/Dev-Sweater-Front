import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { createMovies } from '../../api/movies'

class MovieCreate extends Component {
  constructor () {
    super()
    this.state = {
      movie: {
        title: '',
        director: ''
      },
      createdId: null
    }
  }

  // Update the state for each input
  // So the `value` of the input updates
  // and we can we see what we type
  handleChange = (event) => {
    console.log('changing')

    // 1. Create an object with key (input name), value (input value)
    // event.target.name is a variable - it's value is 'title'
    // event.target.name : 'whatever'
    // const keyName = 'hello' { [keyName]: 'World' }

    const updatedField = { [event.target.name]: event.target.value }

    this.setState(currState => {
      // 2. Use Object.assign to merge that object with the current state `movie`
      // const updatedMovie = Object.assign({}, currState.movie, updatedField)

      // Using spread operator:
      // "Spread" out the current key/value pairs in the `currState.movie` object
      // Then also "spread" the `updatedField` so the key/value pair in  that object overrides the old key/value pair
      // const updatedMovie = { ...currState.movie, [event.target.name]: event.target.value }
      const updatedMovie = { ...currState.movie, ...updatedField }

      // 3. Run setState to reassign the `movie` to our merged object
      return { movie: updatedMovie }
    })
  }

  // handle form submission
  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert } = this.props

    createMovies(user, this.state.movie)
      .then((res) => {
        this.setState({ createdId: res.data.movie._id })
      })
      .then(() => {
        msgAlert({
          heading: 'Movie Created Successfully',
          message: 'Take a look!',
          variant: 'success'
        })
      })
      .catch((err) => {
        msgAlert({
          heading: 'Movie Creation Failed :(',
          message: 'Try again. Error: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to='/movies'/>
    }
    return (
      <React.Fragment>
        <p>Create a Movie</p>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Movie Title Here"
            value={this.state.movie.title}
            onChange={this.handleChange}
            name="title"
          />
          <input
            placeholder="Movie Director Here"
            value={this.state.movie.director}
            onChange={this.handleChange}
            name="director"
          />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default MovieCreate
