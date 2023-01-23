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

        </div>
      </div>

    <div class="col-sm-6 auth-img d-none d-sm-block vh-100"></div>
  </layout-default>
</template>

<script>
import LayoutDefault from "./components/LayoutDefault.vue"

export default {
  name: "Logout",
  components: {
    LayoutDefault,
  },
}
</script>
