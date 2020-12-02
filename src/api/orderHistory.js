import apiUrl from '../apiConfig'
import axios from 'axios'

export const showOrders = (user, orderId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/orders/' + orderId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
