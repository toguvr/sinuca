import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.29.6:3333',
})

export default api