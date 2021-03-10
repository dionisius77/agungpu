import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${location.protocol}//${location.host}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
