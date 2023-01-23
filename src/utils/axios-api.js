import axios from "axios"

axios.defaults.headers.common["access_token"] = 1234
axios.defaults.headers.common["access_key"] = "qwe"

const getAPI = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 10000,
})

export { getAPI }
