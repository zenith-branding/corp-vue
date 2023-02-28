<template>
  <layout-default>
    <div
      class="col-sm-6 p-5 vh-100 d-flex justify-content-center align-items-center"
    >
      <div class="auth-container text-center">
        <img
          src="../../assets/mlg-login-logo.png"
          alt="Gud Ideas Corp"
          class="logo mb-2"
        />
        <h1 class="main-heading mb-4">You are logged out.</h1>
        <p class="pt-2 mb-4">Do you want to login back?</p>
        <router-link class="btn btn-primary w-100 p-3" to="/login" title="login">Login</router-link>
      </div>
    </div>

    <div class="col-sm-6 auth-logout-img d-none d-sm-block vh-100"></div>
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
