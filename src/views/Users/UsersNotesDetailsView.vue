<template>
  <LayoutUsersNotesDetails>
    <div class="card p-2 pb-4 mt-2">
      <h3 class="text-center m-2 pb-4 pt-5 text-primary">
        Sed ut perspiciatis unde omnis
      </h3>
      <p class="card-body pt-3">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo autem
        vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
        nulla pariatur?
      </p>
      <div class="text-right">
        <!-- <a class="mr-2" href="#" @click="toggle = !toggle">
            <i class="fas fa-edit mr-1"></i>Edit
          </a>
          <a href="javascript:;" v-on:click="DeleteUser(0,0)" class="mr-2" >
            <i class="far fa-solid fa-trash"></i>
            delete
          </a> -->
        <!--  -->
        <router-link
          to="#"
          @click="toggle = !toggle"
          title="Edit Address"
        >
          <span class="btn icon-brc-edit"
            ><i class="fas fa-edit mr-1"></i
          ></span>
        </router-link>
        <a
          href="javascript:;"
          v-on:click="deleteNote(0, 0)"
          class="mr-2"
          title="Delete Address"
        >
          <span class="btn icon-brc-trash"
            ><i class="far fa-solid fa-trash"></i> </span
        ></a>
      </div>
      <form
        class="form-group p-2"
        v-show="toggle"
        v-on:submit.prevent="updateNote"
      >
        <label for="validationDefault01">Edit Title:</label>
        <input
          type="text"
          class="form-control mb-3"
          id="validationDefault01"
          placeholder="First name"
          value="Sed ut perspiciatis unde omnis"
        />
        <label for="edit-note">Edit Body:</label>
        <textarea class="form-control" rows="5" id="edit-note"></textarea>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  </LayoutUsersNotesDetails>
</template>

<script>
import LayoutUsersNotesDetails from "./components/LayoutUsersNotesDetails.vue"

export default {
  name: "UsersNotesDetailsView",
  components: {
    LayoutUsersNotesDetails,
  },
  data() {
    return {
      toggle: false,
    }
  },

  methods: {
    updateNote() {
      this.$store.dispatch("updateNote", {
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
    deleteNote(id, index) {
      if (confirm("Delete Note?"))
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
