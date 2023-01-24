import axios, {defaults} from "axios";

 export const API_URL = "http://localhost:8082/api"

const api = axios.create({
    withCredentials : true,
    url : API_URL
})

// config - instance of axios
api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})



export default api;