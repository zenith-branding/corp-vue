import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue" //
import Users from "../views/users/UsersView.vue"
import Login from "../views/auth/LoginVue.vue"

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
      component: Login,
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
    {
      path: "/users",
      name: "Users",
      component: Users,
    },
  ],
})

export default router
