import axios, { InternalAxiosRequestConfig } from 'axios'

const clientApi = axios.create({
  baseURL: 'https://dummyjson.com'
})

clientApi.interceptors.request.use(
  <T>(config: InternalAxiosRequestConfig<T>) => {
    // Do something before request is sent
    const authToken = sessionStorage.getItem('token')
    authToken && (config.headers['authorization'] = `Bearer ${authToken}`)
    return config
  }
)

export default clientApi
