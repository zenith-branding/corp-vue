<template>
  <LayoutUsersNotesCreate>


        <form class="form-group pt-5 card mt-2 p-3" v-on:submit.prevent="updateNote">
          <label for="validationDefault01">Title:</label>
          <input
            type="text"
            class="form-control mb-3"
            id="validationDefault01"
            value=""
          />
          <label for="edit-note">Body:</label>
          <textarea class="form-control" rows="5" id="edit-note"></textarea>
           <button type="submit" class="btn btn-primary mt-3">Save Note</button>
        </form>

  </LayoutUsersNotesCreate>
</template>

<script>
import LayoutUsersNotesCreate from "./components/LayoutUsersNotesCreate.vue"

export default {
  name: "UsersNotesDetailsView",
  components: {
    LayoutUsersNotesCreate,
  },
  data() {
    return {

    }
  },

  methods: {
    
    updateNote() {
      this.$store
        .dispatch("updateNote", {
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
		DeleteUser(id, index) {
    	if(confirm('Delete Note?'))
        axios.delete('/api/artist/'+id)
          .then(resp => {
          this.artists.data.splice(index, 1);
        })
          .catch(error => {
          console.log(error);
        })
    },
  }
}
</script>

<style></style>
