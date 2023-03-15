<template>
  <div class="header-bottom container-xl bg-light mb-4">
    <nav class="container navbar navbar-expand-md navbar-light">
      <span class="d-md-none d-sm-block"></span>
      <!-- <div class="container-fluid"> -->
      <!-- <span class=""></span>
        <a class="navbar-brand d-none d-md-block" href="#">Home</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 py-3">
          <li class="nav-item mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5">
            <router-link
              to="/"
              class="nav-link active"
              aria-current="page"
              title="Dashboard"
              ><i class="far fa-home mr-2"></i>Dashboard
            </router-link>
          </li>
          <li class="nav-item mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5">
            <router-link to="/users" class="nav-link" title="Users"
              ><i class="far fa fa-users mr-2"></i>Users</router-link
            >
          </li>
          <li class="nav-item mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5">
            <router-link to="/candidates" class="nav-link" title="Candidates"
              ><i class="far fa-user-nurse mr-2"></i>Candidates</router-link
            >
          </li>
          <li class="nav-item mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5">
            <router-link to="/clients" class="nav-link" title="Clients"
              ><i class="far far fa-hospital mr-2"></i>Clients</router-link
            >
          </li>
          <li class="nav-item mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5">
          <router-link to="/payroll" class="nav-link" title="Payroll"
            ><i class="fas fa-money-bill mr-2"></i>Payroll</router-link
          ></li>
          <li class="nav-item mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5">
<router-link to="/shifts" class="nav-link" title="Shift"
  ><i class="far fa-receipt mr-2"></i>Shift</router-link
></li>
          <li class="nav-item mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5">
            <router-link to="/timesheets" class="nav-link" title="Timesheets"
              ><i class="far fa-clock mr-2"></i>Timesheets
            </router-link>
          </li>
          <li
            class="nav-item dropdown mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5"
            @mouseover="toggleReports = true"
            @mouseleave="toggleReports = false"
          >
            <router-link
              to="#/reports"
              class="nav-link dropdown-toggle"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="Reports"
            >
              <i class="far fa-money-check-edit-alt mr-2"></i>Reports
            </router-link>
            <ul
              class="dropdown-menu"
              v-bind:class="{ 'd-block': toggleReports, 'd-none': !toggleReports }"
              aria-labelledby="dropdownMenuButton1"
            >
              
              <li>
                <router-link to="/reports/outgoing" class="dropdown-item"
                  >Payroll - Ready to Pay</router-link
                >
              </li>
              <li>
                <router-link to="/reports/outgoing" class="dropdown-item"
                  >Payroll - On Hold</router-link
                >
              </li>
              <li>
                <router-link to="/reports/outgoing" class="dropdown-item"
                  >Candidates - Location Worked</router-link
                >
              </li>
              <li>
                <router-link to="/reports/incoming" class="dropdown-item"
                  >Outstanding Timesheets</router-link
                >
              </li>
            </ul>
          </li>
          <li
            class="nav-item dropdown mr-2 py-lg-1 mr-md-2 mr-lg-4 mr-xl-5"
            @mouseover="toggleInvoices = true"
            @mouseleave="toggleInvoices = false"
          >
            <router-link
              to="/invoices"
              class="nav-link dropdown-toggle"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="Invoices"
            >
              <i class="far fa-file-invoice-dollar mr-2"></i>Pay & Bill
            </router-link>
            <ul
              class="dropdown-menu"
              v-bind:class="{ 'd-block': toggleInvoices, 'd-none': !toggleInvoices }"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <router-link to="/invoices/incoming" class="dropdown-item"
                  >Incoming Invoices</router-link
                >
              </li>
              <li>
                <router-link to="/invoices/outgoing" class="dropdown-item"
                  >Outgoing Invoices</router-link
                >
              </li>
              <li>
                <router-link to="/invoices" class="dropdown-item"
                  >All Invoices</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- </div> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      toggleReports: false,
      toggleInvoices: false,
    }
  },
}
</script>
