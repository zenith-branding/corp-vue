<template>
 <form class="form-group my-1 p-4" v-on:submit.prevent="addUser">


            <label for="validationDefault01" class="text-muted">Forename:</label>
            <input
              type="text"
              class="form-control mb-4"
              id="validationDefault01"
              value=""
            />
            <label for="validationDefault01" class="text-muted">Surname:</label>
            <input
              type="text"
              class="form-control mb-4"
              id="validationDefault01"
              value=""
            />
            <label for="validationDefault01" class="text-muted">Email Address:</label>
            <input
              type="text"
              class="form-control mb-4"
              id="validationDefault01"
              value=""
            />
            <label for="validationDefault01" class="text-muted">Password:</label>
            <input
              type="text"
              class="form-control mb-4"
              id="validationDefault01"
              value=""
            /><label for="validationDefault01" class="text-muted">Confirm Password:</label>
            <input
              type="text"
              class="form-control mb-4"
              id="validationDefault01"
              value=""
            />

        
        </form>
</template>

<script>
export default {
  name: "CreateUserForm",
  components: {},

  data() {
    return {
     
    }
  },
  methods: {
    addUser() {
     
    },
  }
}
</script>

