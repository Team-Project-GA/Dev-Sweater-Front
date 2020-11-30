import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexProducts = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/products'
  })
}

export const createProduct = (user, product) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/products',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: product
  })
}
