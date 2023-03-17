import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue" //
import UsersView from "../views/users/UsersView.vue"
import UsersDetailsView from "../views/Users/UsersDetailsView.vue"
import UsersNotesDetailsView from "../views/users/UsersNotesDetailsView.vue"
import UsersNotesCreateView from "../views/users/UsersNotesCreateView.vue"
import UsersAddressesDetailsView from "../views/users/UsersAddressesDetailsView.vue"
import UsersAddressesCreateView from "../views/users/UsersAddressesCreateView.vue"
import LoginView from "../views/auth/LoginView.vue"
import LogoutView from "../views/auth/LogoutView.vue"
import DashboardView from "../views/dashboard/DashboardView.vue"
import AccountView from "../views/account/AccountView.vue"
import TimesheetsView from "../views/Timesheets/TimesheetsView.vue"
import TimesheetsDetailsView from "../views/Timesheets/TimesheetsDetailsView.vue"
import InvoicesView from "../views/invoices/InvoicesView.vue"
import IncomingInvoicesView from "../views/invoices/IncomingInvoicesView.vue"
import OutgoingInvoicesView from "../views/invoices/OutgoingInvoicesView.vue"
import CandidatesView from "../views/candidates/CandidatesView.vue"
import CandidatesDetailsView from "../views/candidates/CandidatesDetailsView.vue"
import ClientsView from "../views/clients/ClientsView.vue"
import ShiftsView from "../views/shifts/ShiftsView.vue"
import ShiftsDetailsView from "../views/shifts/ShiftsDetailsView.vue"
import IncomingInvoicesDetailsView from "../views/invoices/IncomingInvoicesDetailsView.vue"
import PayrollView from "../views/payroll/PayrollView.vue"
import AllPayrollView from "../views/payroll/AllPayrollView.vue"
import ReadyToPayPayrollView from "../views/payroll/ReadyToPayPayrollView.vue"
import OnHoldPayrollView from "../views/payroll/OnHoldPayrollView.vue"
import PendingPayrollView from "../views/payroll/PendingPayrollView.vue"
import PaidPayrollView from "../views/payroll/PaidPayrollView.vue"
import ReportsView from "../views/reports/ReportsView.vue"


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
      path: "/users/view/notes/create",
      name: "UsersNotesCreateView",
      component: UsersNotesCreateView,
    },
    {
      path: "/users/view/addresses/view",
      name: "UsersAddressesDetailsView",
      component: UsersAddressesDetailsView,
    },
    {
      path: "/users/view/addresses/create",
      name: "UsersAddressesCreateView",
      component: UsersAddressesCreateView,
    },

    // --- UsersEnd ----
    // --- Candidates ----
    {
      path: "/candidates",
      name: "CandidatesView",
      component: CandidatesView,
    },
    {
      path: "/candidate/view",
      name: "CandidatesDetailsView",
      component: CandidatesDetailsView,
    },

    // --- CandidatesEnd ----
    // --- Clients ----
    {
      path: "/clients",
      name: "ClientsView",
      component: ClientsView,
    },

    // --- CandidatesEnd ----
    // --- Shifts ----
    {
      path: "/shifts",
      name: "ShiftsView",
      component: ShiftsView,
    },
    {
      path: "/shifts/view",
      name: "ShiftsDetailsView",
      component: ShiftsDetailsView,
    },
    // --- CandidatesEnd ----

    // --- Timesheets ----
    {
      path: "/timesheets",
      name: "timesheetsView",
      component: TimesheetsView,
    },
    {
      path: "/timesheets/view",
      name: "TimesheetsDetails",
      component: TimesheetsDetailsView,
    },

    // --- TimesheetsEnd ----

    // --- Invoices ----
    {
      path: "/invoices",
      name: "InvoicesView",
      component: InvoicesView,
    },
    {
      path: "/invoices/incoming",
      name: "IncomingInvoicesView",
      component: IncomingInvoicesView,
    },
    {
      path: "/invoices/incoming/view",
      name: "IncomingInvoicesDetailsView",
      component: IncomingInvoicesDetailsView,
    },
    {
      path: "/invoices/outgoing",
      name: "OutgoingInvoicesView",
      component: OutgoingInvoicesView,
    },

    // --- InvoicesEnd ----
    // --- Payroll ----
    {
      path: "/payroll",
      name: "PayrollView",
      component: PayrollView,
    },
    {
      path: "/payroll/all",
      name: "AllPayrollView",
      component: AllPayrollView,
    },
    {
      path: "/payroll/ready-to-pay",
      name: "ReadyToPayPayrollView",
      component: ReadyToPayPayrollView,
    },
    {
      path: "/payroll/on-hold",
      name: "OnHoldPayrollView",
      component: OnHoldPayrollView,
    },
    {
      path: "/payroll/pending",
      name: "PendingPayrollView",
      component: PendingPayrollView,
    },
    {
      path: "/payroll/paid",
      name: "PaidPayrollView",
      component: PaidPayrollView,
    },
    // --- PayrollEnd ----
    // --- Reports ----
    {
      path: "/reports",
      name: "ReportsView",
      component: ReportsView,
    },
    // --- ReportsEnd ----
  ],
})

export default router
