import Vue from "vue"
import VueRouter from "vue-router"

/** -----------
 Authentication
------------ */
/* Login */
import Login from "../views/v1/auth/modules/login/Login"

/* Reset Password */
import ResetPassword from "../views/v1/auth/modules/forgot-password/ResetPassword"
import ResetEmail from "../views/v1/auth/modules/forgot-password/ResetEmail"

/** -----------
 Backend
------------ */
/* ---- Dashboard ---- */
import Dashboard from "../views/v1/backend/modules/dashboard/Dashboard"

/* ---- Candidates --- */
/* Candidates -> Index */
import Candidates from "../views/v1/backend/modules/candidates/Candidates"

/* Candidates -> View */
import CandidatesDetails from "../views/v1/backend/modules/candidates/view/modules/details/CandidatesDetails"

/* ---- Clients --- */
/* Clients -> Index */
import Clients from "../views/v1/backend/modules/clients/Clients"

/* Clients -> View */
import ClientsDetails from "../views/v1/backend/modules/clients/view/modules/details/ClientsDetails"

/* ---- Shifts --- */
/* Shifts -> Index */
import Shifts from "../views/v1/backend/modules/shifts/Shifts"

/* ---- Payroll --- */
/* Payroll -> Dashboard */
import PayrollDashboard from "../views/v1/backend/modules/payroll/dashboard/PayrollDashboard"

/* Payroll -> All */
import PayrollAll from "../views/v1/backend/modules/payroll/all/PayrollAll"

/* Payroll -> Pending */
import PayrollPending from "../views/v1/backend/modules/payroll/pending/PayrollPending"

/* Payroll -> On-Hold */
import PayrollOnHold from "../views/v1/backend/modules/payroll/on-hold/PayrollOnHold"

/* Payroll -> Ready to pay */
import PayrollReadyToPay from "../views/v1/backend/modules/payroll/ready-to-pay/PayrollReadyToPay"

/* Payroll -> Paid */
import PayrollPaid from "../views/v1/backend/modules/payroll/paid/PayrollPaid"

/* ---- Invoices --- */
/* Invoices -> Incoming */
/* Invoices -> Dashboard */
import InvoicesDashboard from "../views/v1/backend/modules/invoices/dashboard/InvoicesDashboard"

/* Invoices -> Incoming -> All */
import InvoicesIncomingAll from "../views/v1/backend/modules/invoices/incoming/all/InvoicesIncomingAll"

/* Invoices -> Incoming -> Waiting to Receive */
import InvoicesIncomingWaitingToReceive from "../views/v1/backend/modules/invoices/incoming/waiting-to-receive/InvoicesIncomingWaitingToReceive"

/* Invoices -> Incoming -> Settled */
import InvoicesIncomingSettled from "../views/v1/backend/modules/invoices/incoming/settled/InvoicesIncomingSettled"

/* Invoices -> Outgoing */
/* Invoices -> Outgoing -> All */
import InvoicesOutgoingAll from "../views/v1/backend/modules/invoices/outgoing/all/InvoicesOutgoingAll"

/* Invoices -> Outgoing -> Waiting Payment */
import InvoicesOutgoingWaitingPayment from "../views/v1/backend/modules/invoices/outgoing/waiting-payment/InvoicesOutgoingWaitingPayment"

/* Invoices -> Outgoing -> Settled */
import InvoicesOutgoingSettled from "../views/v1/backend/modules/invoices/outgoing/settled/InvoicesOutgoingSettled"

Vue.use(VueRouter)

const routes = [
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
    component: ResetPassword,
  },
  {
    path: "/password/email",
    name: "ResetEmail",
    component: ResetEmail,
  },
  // ---- Backend ----
  // -> ---- Dashboard
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  // -> ---- Candidates
  //  -> Candidates - Index
  {
    path: "/candidates",
    name: "Candidates",
    component: Candidates,
  },
  //  -> Candidates - Details
  {
    path: "/candidates/view",
    name: "CandidatesDetails",
    component: CandidatesDetails,
  },
  // -> ---- Clients
  //  -> Clients - Index
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  //  -> Clients - Details
  {
    path: "/clients/view",
    name: "ClientsDetails",
    component: ClientsDetails,
  },
  // -> ---- Shifts
  //  -> Shifts - Index
  {
    path: "/shifts",
    name: "Shifts",
    component: Shifts,
  },
  // -> ---- Payroll
  //  -> Payroll - Index
  {
    path: "/payroll",
    name: "PayrollDashboard",
    component: PayrollDashboard,
  },
  //  -> Payroll - All
  {
    path: "/payroll/all",
    name: "PayrollAll",
    component: PayrollAll,
  },
  //  -> Payroll - Pending
  {
    path: "/payroll/pending",
    name: "PayrollPending",
    component: PayrollPending,
  },
  //  -> Payroll - On-Hold
  {
    path: "/payroll/on-hold",
    name: "PayrollOnHold",
    component: PayrollOnHold,
  },
  //  -> Payroll - Ready to Pay
  {
    path: "/payroll/ready-to-pay",
    name: "PayrollReadyToPay",
    component: PayrollReadyToPay,
  },
  //  -> Payroll - Paid
  {
    path: "/payroll/paid",
    name: "PayrollPaid",
    component: PayrollPaid,
  },
  // -> ---- Invoices
  //    -> Invoices - Index
  {
    path: "/invoices",
    name: "InvoicesDashboard",
    component: InvoicesDashboard,
  },
  //  -> Invoices - Incoming
  //    -> Invoices - Incoming - All
  {
    path: "/invoices/incoming/all",
    name: "InvoicesIncomingAll",
    component: InvoicesIncomingAll,
  },
  //    -> Invoices - Incoming - Waitng to Receive
  {
    path: "/invoices/incoming/waiting-to-receive",
    name: "InvoicesIncomingWaitingToReceive",
    component: InvoicesIncomingWaitingToReceive,
  },
  //    -> Invoices - Incoming - Settled
  {
    path: "/invoices/incoming/settled",
    name: "InvoicesIncomingSettled",
    component: InvoicesIncomingSettled,
  },
  //  -> Invoices - Outgoing
  //    -> Invoices - Outgoing - All
  {
    path: "/invoices/outgoing/all",
    name: "InvoicesOutgoingAll",
    component: InvoicesOutgoingAll,
  },
  //    -> Invoices - Outgoing - Waiting Payment
  {
    path: "/invoices/outgoing/waiting-payment",
    name: "InvoicesOutgoingWaitingPayment",
    component: InvoicesOutgoingWaitingPayment,
  },
  //    -> Invoices - Outgoing - Settled
  {
    path: "/invoices/outgoing/settled",
    name: "InvoicesOutgoingSettled",
    component: InvoicesOutgoingSettled,
  },
]

const router = new VueRouter({
  routes,
})

export default router
