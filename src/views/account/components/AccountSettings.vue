<template>
  <div class="row button-row mb-3 p-1 pt-4">
    <div class="col-sm-12">
      <h4 class="card-title text-brand">Password</h4>
      <p class="card-text sub-heading pb-2">
        Enter your current & new password to reset your password
      </p>

      <!-- Current Password -->
      <div class="d-flex flex-row border-bottom">
        <label for="Current Password" class="account-label"
          >Current Password:</label
        >
        <input type="password" class="form-control my-4" placeholder="Current Password" />
      </div>
      <!-- New Password -->
      <div class="d-flex flex-row border-bottom">
        <label for="New Password" class="account-label"
          >New Password:</label
        >
        <input type="password" class="form-control my-4" placeholder="New Password" />
      </div>
      <!-- Confirm  Password -->
      <div class="d-flex flex-row border-bottom">
        <label for="Confirm  Password" class="account-label"
          >Confirm  Password:</label
        >
        <input type="password" class="form-control my-4" placeholder="Confirm  Password" />
      </div>
      <button type="submit" class="btn btn-primary mt-4 float-right">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountSettings",
  components: {},
  data() {
    return {
      date: null,
    }
  },
}
</script>
