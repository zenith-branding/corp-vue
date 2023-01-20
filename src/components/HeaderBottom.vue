<template>
  <div class="header-bottom container-xl bg-light">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
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
                href="#/"
                class="nav-link active"
                aria-current="page"
                title="Dashboard"
                ><i class="far fa-home mr-1"></i>Dashboard
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#/candidates"
              title="Candidates"
                ><i class="far fa-user-nurse mr-1"></i>Candidates</a
              >
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#/clients"
              title="Clients"
                ><i class="far far fa-hospital mr-1"></i>Clients</a
              >
            </li>
                        <li class="nav-item  mr-3">
              <a class="nav-link" href="#/shifts"
              title="Shifts"
                ><i class="far fa-clock"></i>Shifts </a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title="Invoices"
              >
                <i class="far fa-file-invoice-dollar"></i>Invoices
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
      </div>
    </nav>
  </div>
  
  <!--  -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "",
  data() {
    return {}
  },
}
</script>
