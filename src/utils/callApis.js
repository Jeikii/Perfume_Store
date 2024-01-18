import axios from 'axios'
import { BASE_URL } from './constants'

export const callApis = async (resource) => {
  const data = await axios.get(`${BASE_URL}/${resource}`)
  return data
}