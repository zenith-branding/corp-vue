import { getAPI } from "./utils/axios-api"
import { createStore } from "vuex"

export default createStore({
  state: {
    token: null,
    APIData: "",
    status: "pending",
  },

  mutations: {
    updateStorage(state, { access, refresh, token }) {
      state.token = token
      localStorage.setItem('token' , token)
    },
    destroyToken(state) {
      state.token = null
      localStorage.removeItem("token", token)
    },
  },
  getters: {
    loggedIn(state) {
      return state.token != null
    },
  },
  actions: {
    userLogout(context) {
      if (context.getters.loggedIn) {
        context.commit("destroyToken")
      }
    },
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post("/login/", {
            email: usercredentials.email,
            password: usercredentials.password,
          })
          .then((response) => {
            context.commit("updateStorage", {
              token: response.data.token,
            })
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})
