import axios from 'axios';
const api = axios.create({
  baseURL: 'https://backend-sneakers.up.railway.app/'
})

export default api
