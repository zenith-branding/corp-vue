import "../src/assets/font-awesome.css"
import "../src/assets/style.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// Date Picker
import Datepicker from "@vuepic/vue-datepicker"
import "@vuepic/vue-datepicker/dist/main.css"

import { Bootstrap4Pagination } from "laravel-vue-pagination"

const app = createApp(App)

app.use(router)
app.use(store)
app.component("Datepicker", Datepicker)
app.component("Bootstrap4Pagination", Bootstrap4Pagination)

app.mount("#app")




