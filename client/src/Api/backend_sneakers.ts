import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-sneakers.up.railway.app/',
  /* withCredentials: true, */
})

/* api.interceptors.request.use(config => {
  const token = useAuthStore.getState().token
  config.headers = Object.assign({}, config.headers, {
    Authorization: `Bearer ${token}`,
  })
  return config
}) */

export default api
