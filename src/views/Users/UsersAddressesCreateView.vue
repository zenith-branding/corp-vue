<template>
  <LayoutUsersAddressesCreate>

        <form class="form-group my-2 pt-5 card" v-on:submit.prevent="addAddress">
          <div class="p-4 sub-heading">
            <label for="validationDefault01">Address Line 1:</label>
            <input
              type="text"
              class="form-control mb-3"
              id="validationDefault01"
              value=""
            />
            <label for="validationDefault01">Address Line 2:</label>
            <input
              type="text"
              class="form-control mb-3"
              id="validationDefault01"
              value=""
            />
            <label for="validationDefault01">City:</label>
            <input
              type="text"
              class="form-control mb-3"
              id="validationDefault01"
              value=""
            />
            <label for="validationDefault01">County:</label>
            <input
              type="text"
              class="form-control mb-3"
              id="validationDefault01"
              value=""
            /><label for="validationDefault01">Postcode:</label>
            <input
              type="text"
              class="form-control mb-3"
              id="validationDefault01"
              value=""
            />
            <label for="validationDefault01">Country:</label>
            <input
              type="text"
              class="form-control mb-3"
              id="validationDefault01"
              value=""
            />
            <button type="submit" class="btn btn-primary mt-3">
              Save Address
            </button>
          </div>
        </form>

  </LayoutUsersAddressesCreate>
</template>

<script>
import LayoutUsersAddressesCreate from "./components/LayoutUsersAddressesCreate.vue"

export default {
  name: "UsersAddressesCreateView",
  components: {
    LayoutUsersAddressesCreate,
  },
  data() {
    return {
      toggle: false,
    }
  },

  methods: {
    updateAddress() {
      this.$store.dispatch("updateAddress", {
        //   email: this.email,
        //   password: this.password,
        // })
        // .then(() => {
        //   this.$router.push({ name: "Users" })
        // })
        // .catch((err) => {
        //   console.log(err)
        //   this.incorrectAuth = true
      })
    },
    deleteAddress(id, index) {
      if (confirm("Delete Address?"))
        axios
          .delete("/api/artist/" + id)
          .then((resp) => {
            this.artists.data.splice(index, 1)
          })
          .catch((error) => {
            console.log(error)
          })
    },
  },
}
</script>

<style></style>
