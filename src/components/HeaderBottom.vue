<template>
  
  <div class="header-bottom container-xl bg-light">
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mr-3">
            <a
              href="http://localhost:5173/"
              class="nav-link active"
              aria-current="page"
              title="Dashboard"
              ><i class="far fa-home mr-1"></i>Dashboard
            </a>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="/users" title="Users"
              ><i class="far fa fa-users mr-1"></i>Users</a
            >
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="#/candidates" title="Candidates"
              ><i class="far fa-user-nurse mr-1"></i>Candidates</a
            >
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="#/clients" title="Clients"
              ><i class="far far fa-hospital mr-1"></i>Clients</a
            >
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="#/shifts" title="Shifts"
              ><i class="far fa-clock mr-1"></i>Shifts
            </a>
          </li>
          <li class="nav-item dropdown mr-3">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="Invoices"
            >
              <i class="far fa-file-invoice-dollar mr-1"></i>Invoices
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
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
    return {}
  },
}
</script>
