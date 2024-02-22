import axios, { InternalAxiosRequestConfig } from 'axios'

const clientApi = axios.create({
  baseURL: 'https://dummyjson.com'
})

clientApi.interceptors.request.use(
  <T>(config: InternalAxiosRequestConfig<T>) => {
    // Do something before request is sent
    const authToken = localStorage.get('token')
    config.headers['authorization'] = authToken ? `Bearer ${authToken}` : null
    return config
  }
)

export default clientApi
