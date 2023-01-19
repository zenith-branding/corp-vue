// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap"
import "/css/custom.min.css"
import "./assets/stylus.styl"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./assets/main.css"
import "./assets/corp.css"

const app = createApp(App)

app.use(router)

app.mount("#app")

import "bootstrap/dist/js/bootstrap.js"

