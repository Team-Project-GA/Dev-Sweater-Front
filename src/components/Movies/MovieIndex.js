import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { indexMovies } from '../../api/movies'

class MovieIndex extends Component {
  constructor () {
    super()
    this.state = {
      movieArray: null
    }
  }

  componentDidMount () {
    const { user } = this.props

    indexMovies(user)
      .then(res => {
        console.log(res)
        this.setState({ movieArray: res.data.movies })
      })
      .catch(() => {
        return console.error
      })
  }

  render () {
    if (!this.state.movieArray) {
      return (
        'Loading...'
      )
    } else if (this.state.movieArray.length === 0) {
      return (
        'No movies to display :('
      )
    } else {
      return (
        <div>
          {this.state.movieArray.map(movie => (
            <Fragment key={movie._id}>
              <h2>{movie.title}</h2>
              <p>{movie.director}</p>
              <Link to={`/movie-show/${movie._id}`}>See More</Link>
            </Fragment>
          ))}
        </div>
      )
    }
  }
}

export default MovieIndex
