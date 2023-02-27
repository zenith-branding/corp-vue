<template>
  <div class="row">
    <div
      class="col-sm-6 p-5 vh-100 d-flex justify-content-center align-items-center"
    >
      <div class="auth-container text-center">
        
        <img
          src="../../assets/mlg-login-logo.png"
          alt="Gud Ideas Corp"
          class="logo mb-2"
        />
        <h1 class="main-heading mb-4">Sign Into Your Account</h1>

        <p v-if="incorrectAuth" class="badge badge-warning p-3 w-100 mb-3">
          Incorrect username or password entered!
        </p>
        <form v-on:submit.prevent="login">
          <div class="mb-4">
            <!-- <label for="email" class="form-label">Email address</label> -->
            <input
              type="email"
              class="form-control p-3"
              id="email"
              name="email"
              v-model="email"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
          </div>
          <div class="mb-4">
            <!-- <label for="exampleInputPassword1" class="form-label"
              >Password</label
            > -->
            <input
              type="password"
              class="form-control p-3"
              name="password"
              id="pass"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="form-auth-details mb-4">
            <div class="form-check form-details-link" >
              <input
                type="checkbox"
                class="checkbox"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Remember me</label
              >
            </div>
            <router-link class="form-details-link" to="/login" title="login">Forgot your password?</router-link>
          </div>
          <button type="submit" class="btn btn-primary w-100 p-3">Submit</button>
        </form>
      </div>
    </div>

    <div class="col-sm-6 auth-img d-none d-sm-block vh-100"></div>
  </div>
</template>

<script>
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
