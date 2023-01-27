<template>
  <layout-default>
    <div
      class="col-sm-6 p-5 vh-100 d-flex justify-content-center align-items-center"
    >
      <div>
        <img
          src="../../assets/mlg-sm-logo.png"
          alt="Gud Ideas Corp"
          class="logo"
        />
        <h1 class="main-heading mb-3">You are logged out.</h1>
        <p class="pt-2">Do you want to login back?</p>
        <a class="btn btn-primary" href="/login" title="login">Login</a>
      </div>
    </div>

    <div class="col-sm-6 auth-img d-none d-sm-block vh-100"></div>
  </layout-default>
</template>

<script>
import LayoutDefault from "./components/LayoutAuthDefault.vue"

export default {
  name: "LogoutView",
  components: {
    LayoutDefault,
  },
}
</script>
