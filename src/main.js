// import "../dist/style.css"
// import "./assets/stylus.styl"
import "./assets/theme.styl"
import "../src/assets/font-awesome.css"
import "../src/assets/style.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"


const app = createApp(App)

app.use(router)

app.mount("#app")

// import "../src/stylus/bootstrap_core/index.js"

