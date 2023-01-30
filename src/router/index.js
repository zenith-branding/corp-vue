import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue" //
import UsersView from "../views/users/UsersView.vue"
import UsersDetailsView from "../views/Users/UsersDetailsView.vue"
import UsersNotesDetailsView from "../views/users/UsersNotesDetailsView.vue"
import UsersAddressesDetailsView from "../views/users/UsersAddressesDetailsView.vue"
import LoginView from "../views/auth/LoginView.vue"
import LogoutView from "../views/auth/LogoutView.vue"
import DashboardView from "../views/dashboard/DashboardView.vue"
import AccountView from "../views/account/AccountView.vue"
import ShiftsView from "../views/shifts/ShiftsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      // path: "/password/reset",
      // name: "ResetPassword",
      // component: ResetPassword,
    },
    {
      // path: "/password/email",
      // name: "ResetEmail",
      // component: ResetEmail,
    },
    // --- AuthEnd ----
    // --- Dashboard ----
    {
      path: "/",
      name: "Dashboard",
      component: DashboardView,
    },
    // --- My Account ----
    {
      path: "/my-account",
      name: "AccountView",
      component: AccountView,
    },
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
    {
      path: "/users/view/notes/view",
      name: "UsersNotesDetailsView",
      component: UsersNotesDetailsView,
    },
    {
      path: "/users/view/addresses/view",
      name: "UsersAddressesDetailsView",
      component: UsersAddressesDetailsView,
    },

    // --- UsersEnd ----

    // --- Shifts ----
    {
      path: "/Shifts",
      name: "Shifts",
      component: ShiftsView,
    },

    // --- ShiftsEnd ----
  ],
})

export default router
