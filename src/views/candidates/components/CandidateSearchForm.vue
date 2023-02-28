<template>
  <form class="form-group my-1 p-4" v-on:submit.prevent="searchCandidate">
    <label for="validationDefault01" class="text-muted pb-2">Forename:</label>
    <input
      type="text"
      class="form-control mb-4"
      id="validationDefault01"
      value=""
    />
    <label for="validationDefault01" class="text-muted pb-2">Surname:</label>
    <input
      type="text"
      class="form-control mb-4"
      id="validationDefault01"
      value=""
    />
    <label for="validationDefault01" class="text-muted pb-2">Region:</label>
    <input
      type="text"
      class="form-control mb-4"
      id="validationDefault01"
      value=""
    />
    <label for="validationDefault01" class="text-muted pb-2">Payment Method:</label>

    <div class="form-check">
      <input
        class=""
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label class="form-check-label" for="defaultCheck1">
        Self Employed
      </label>
    </div>
    <div class="form-check">
      <input
        class=""
        type="checkbox"
        value=""
        id="defaultCheck2"
      />
      <label class="form-check-label" for="defaultCheck2">
       PAYE
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "CandidateSearchForm",
  components: {},

  data() {
    return {}
  },
  methods: {
    searchCandidate() {},
  },
}
</script>
