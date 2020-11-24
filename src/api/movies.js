import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexMovies = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/movies',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showMovies = (user, movieId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/movies/' + movieId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteMovies = (user, movieId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/movies/' + movieId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const createMovies = (user, movie) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/movies',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { movie }
  })
}

export const updateMovies = (user, movie, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/movies/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { movie: movie }
  })
}
