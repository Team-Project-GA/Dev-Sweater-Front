import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { showMovies, deleteMovies } from '../../api/movies'

const MovieShow = (props) => {
  // const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState(null)
  const { user, match, history } = props

  // useEffect for componentDidMount
  // Load the movie to show
  useEffect(() => {
    // runs just once on mount :)
    // const { id } = props.match.params
    showMovies(user, match.params.id)
      .then(res => {
        console.log('res is', res)
        setMovie(res.data.movie)
      })
      .catch(() => {
        return console.error
      })
  }, [])

  const handleDelete = () => {
    deleteMovies(user, match.params.movieId)
      .then(() => history.push('/movies'))
      .catch(() => {
        return console.error
      })
  }

  // If loading (movie is null), print 'Loading...'
  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Directed by: {movie.director}</p>
          <button onClick={handleDelete}>Delete</button>
          <Link to={'/movie-update/' + movie._id}>Update Movie</Link>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(MovieShow)
