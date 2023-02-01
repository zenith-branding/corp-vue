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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 py-3 ">
          <li class="nav-item mr-2 mr-lg-4">
            <router-link to="/"
              class="nav-link active"
              aria-current="page"
              title="Dashboard"
              ><i class="far fa-home mr-1"></i>Dashboard
           </router-link
            >
          </li>
          <li class="nav-item mr-2 mr-lg-4">
            <router-link to="/users" class="nav-link" title="Users"
              ><i class="far fa fa-users mr-1"></i>Users</router-link
            >
          </li>
          <li class="nav-item mr-2 mr-lg-4">
            <router-link to="#/candidates" class="nav-link" title="Candidates"
              ><i class="far fa-user-nurse mr-1"></i>Candidates</router-link
            >
          </li>
          <li class="nav-item mr-2 mr-lg-4">
            <router-link to="#/clients" class="nav-link" title="Clients"
              ><i class="far far fa-hospital mr-1"></i>Clients</router-link
            >
          </li>
          <li class="nav-item mr-2 mr-lg-4">
            <router-link to="/shifts" class="nav-link" title="Shifts"
              ><i class="far fa-clock mr-1"></i>Shifts
            </router-link>
          </li>
          <li class="nav-item mr-2 mr-lg-4">
            <router-link to="#/reports" class="nav-link" title="Reports"
              ><i class="far far fa-hospital mr-1"></i>Reports</router-link
            >
          </li>
          <li class="nav-item dropdown mr-2 mr-lg-4">
            <a
              class="nav-link dropdown-toggle"
              href="/invoices"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="Invoices"
              @click="toggle = !toggle"
            >
              <i class="far fa-file-invoice-dollar mr-1"></i>Invoices
            </a>
            <ul
              class="dropdown-menu"
              v-bind:class="{ 'd-block': toggle, 'd-none': !toggle }"
              aria-labelledby="dropdownMenuButton1"
              v-show="toggle"
              @click="toggle = !toggle"
            >
              <li>
                <a class="dropdown-item" href="/invoices/incoming"
                  >Incoming Invoices</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="/invoices/outgoing"
                  >Outgoing Invoices</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="/invoices">All Invoices</a>
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
      toggle: false,
    }
  },
}
</script>
