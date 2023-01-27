import axios from "axios"

const token = localStorage.getItem("token")
axios.defaults.headers.common["access_token"] = 1234
axios.defaults.headers.common["access_key"] = "qwe"
axios.defaults.headers.Authorization = token ? `Bearer ${token}` : ""
  
const getAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 20000,
})

getAPI.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token")
  config.headers.Authorization = token ? `Bearer ${token}` : ""
  return config
})

export { getAPI }
