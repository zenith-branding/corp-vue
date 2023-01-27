import "../src/assets/font-awesome.css"
import "../src/assets/style.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import { Bootstrap4Pagination } from "laravel-vue-pagination"

const app = createApp(App)

app.use(router)
app.use(store)
app.component("Bootstrap4Pagination", Bootstrap4Pagination)

app.mount("#app")




