import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue" //
import UsersView from "../views/users/UsersView.vue"
import UsersDetailsView from "../views/Users/UsersDetailsView.vue"
import LoginView from "../views/auth/LoginView.vue"
import LogoutView from "../views/auth/LogoutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    /*  */
    // --- Auth ----
    // -> Login
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    // -> Logout
    {
      path: "/logout",
      name: "Logout",
      component: LogoutView,
    },
    // -> Reset Password
    {
      path: "/password/reset",
      name: "ResetPassword",
      // component: ResetPassword,
    },
    {
      path: "/password/email",
      name: "ResetEmail",
      // component: ResetEmail,
    },
    // --- AuthEnd ----
    // --- Users ----
    {
      path: "/users",
      name: "Users",
      component: UsersView,
    },
    {
      path: "/users/view",
      name: "UsersDetails",
      component: UsersDetailsView,
    },
    // --- UsersEnd ----
  ],
})

export default router
