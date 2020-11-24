import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { showMovies, deleteMovies } from '../../api/movies'

const MovieShow = (props) => {
  // const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState(null)
  const { user, msgAlert, match, history } = props

  // useEffect for componentDidMount
  // Load the movie to show
  useEffect(() => {
    // runs just once on mount :)
    // const { id } = props.match.params

    showMovies(user, match.params.movieId)
      .then(res => {
        console.log(res)
        setMovie(res.data.movie)
      })
      .then(() => {
        msgAlert({
          heading: 'Show Movie Success',
          message: 'See the movie there!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Movie Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    deleteMovies(user, match.params.movieId)
      .then(() => {
        msgAlert({
          heading: 'Movie Deleted',
          message: 'Back to the list of movies that exist',
          variant: 'success'
        })
      })
      .then(() => history.push('/movies'))
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
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
