<template>
  <LayoutUsersAddressesDetails>

      <div class="card  my-2 pb-4">
        <h3 class="text-center pt-5">Edit Address</h3>
        <p class="card-body d-block p-3">
          <span class="font-weight-bold mr-3">Street:</span>Alanod, Chippenham
          Dr <br />
          <span class="font-weight-bold mr-3">City:</span>Milton Keynes
          <br />
          <span class="font-weight-bold mr-3">Postcode:</span>MK10 0AN
          <br />
          
        </p>
        <div class="text-right">
          <a class="mr-2" href="#" @click="toggle = !toggle">
            <i class="fas fa-edit mr-1"></i>Edit
          </a>
          <a href="javascript:;" v-on:click="deleteAddress(0, 0)" class="mr-2">
            <i class="far fa-solid fa-trash"></i>
            delete
          </a>
        </div>
        <form
          class="form-group"
          v-show="toggle"
          v-on:submit.prevent="updateAddress"
        >
          <label for="validationDefault01">Street:</label>
          <input
            type="text"
            class="form-control mb-3"
            id="validationDefault01"
            placeholder="Street name"
          />
          <label for="validationDefault01">City:</label>
          <input
            type="text"
            class="form-control mb-3"
            id="validationDefault01"
            placeholder="City"

          />
          <label for="validationDefault01">Postcode:</label>
          <input
            type="text"
            class="form-control mb-3"
            id="validationDefault01"
            placeholder="Postcode"
          />
          <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
      </div>

  </LayoutUsersAddressesDetails>
</template>

<script>
import LayoutUsersAddressesDetails from "./components/LayoutUsersAddressesDetails.vue"

export default {
  name: "UsersAddressesDetailsView",
  components: {
    LayoutUsersAddressesDetails,
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
