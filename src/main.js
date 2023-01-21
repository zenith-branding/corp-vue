// import "../dist/style.css"
// import "./assets/stylus.styl"
import "./assets/theme.styl"
import "../src/assets/font-awesome.css"
import "../src/assets/style.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// import HeaderTop from "./components/HeaderTop.vue"
// import HeaderBottom from "./components/HeaderBottom.vue"

const app = createApp(App)

app.use(router)
// app.component("HeaderTop", HeaderTop, "HeaderBottom", HeaderBottom)

app.mount("#app")

// import "../src/stylus/bootstrap_core/index.js"

