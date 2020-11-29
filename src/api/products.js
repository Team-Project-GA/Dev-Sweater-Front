import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexProducts = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/products'
  })
}
