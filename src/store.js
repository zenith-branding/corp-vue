import { getAPI } from "./utils/axios-api"
import { createStore } from "vuex"

export default createStore({
  state: {
    token: null,
    access_token: 1234,
    access_key: "qwe",
    email: "test@email.com",
    password: "123456",
    APIData: "",
  },

  mutations: {
    updateStorage(state, { access, refresh, token }) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
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
          .post(
            "/login/",
            {
              email: "test@email.com",
              password: "123456",
            }
            // username: usercredentials.username,
            // password: usercredentials.password,
          )
          .then((response) => {
            context.commit("updateStorage", {
              //   access: response.data.access,
              //   refresh: response.data.refresh,
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
