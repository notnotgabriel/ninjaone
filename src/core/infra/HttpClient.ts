import axios from 'axios'

function createHttpClient() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
  })

  return instance
}

export default createHttpClient()
