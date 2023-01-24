<template>
  <!-- <layout-default> -->
  <div class="row">
    <div
      class="col-sm-6 p-5 vh-100 d-flex justify-content-center align-items-center"
    >
      <div>
        <img
          src="../../assets/mlg-sm-logo.png"
          alt="Gud Ideas Corp"
          class="logo"
        />
        <h1 class="main-heading mb-3">Sign In.</h1>

        <p v-if="incorrectAuth" class="badge badge-warning">
          Incorrect username or password entered!
        </p>
        <form v-on:submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              name="password"
              id="pass"
              v-model="password"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <div class="col-sm-6 auth-img d-none d-sm-block vh-100"></div>
  </div>
  <!-- </layout-default> -->
</template>

<script>
import LayoutDefault from "./components/LayoutAuthDefault.vue"

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      incorrectAuth: false,
    }
  },
  components: {
    // LayoutDefault,
  },
  methods: {
    login() {
      this.$store
        .dispatch("userLogin", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "Users" })
        })
        .catch((err) => {
          console.log(err)
          this.incorrectAuth = true
        })
    },
  },
}
</script>
