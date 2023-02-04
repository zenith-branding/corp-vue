<template>
  <!-- <div class="d-flex justify-content-between bg-primary p-3 m-0">
    <img src="../assets/mlg-logo.png" style="max-width: 300px;">
    <p >Header top</p>
  </div> -->
  <div class="header-top bg-primary p-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-4 col-4 logo-col">
          <a href="#/" class="logo router-link-active" title="Medical Locums">
            <img
              src="../assets/mlg-logo.png"
              alt="Medical Locums"
              class="d-none d-sm-block"
            />
            <img
              src="../assets/mlg-sm-logo.png"
              alt="Medical Locums"
              class="d-block d-sm-none"
            />
          </a>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-8 col-8 navigation-col">
          <ul class="pt-3">
            <li class="btn-icon  last float-right">
              <a href="/login" class="" title="Log Out"
                ><i class="far fa-power-off text-white"></i
              ></a>
            </li>
            <li class="btn-icon  alt d-none d-sm-block float-right">
              <router-link to="/my-account" class="" :title="name"
                ><i class="far fa-user text-white"></i
              ></router-link>
            </li>
            <li class="btn-icon  float-right">
              <a href="javascript:void(0);" title="Notifications"
                ><i class="far fa-bell text-white"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      name: "user name"
    }
  },
}
</script>
