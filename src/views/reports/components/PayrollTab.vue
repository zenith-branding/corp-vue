<template>
  <div class="main-content-panel my-2">
    <div class="row">
    <div class="col-xl-6 col-md-12">
        <router-link
          to="/users"
          title="267 Shifts on-hold this week"
          class="card-body"
        >
      <div class="card overflow-hidden stat-box">
        <div class="card-content">
          <div class="card-body">
            <div class="media align-items-stretch">

              <div class="media-body">
                <h4 class="card-title">Nurse Paid</h4>
                <span class="card-text">Have we invoiced the client</span>
              </div>
              <div class="align-self-center">
                <h1><i class="far fa-user-nurse mr-2 text-danger"></i></h1>
              </div>
            </div>
          </div>
        </div>
    </div>
</router-link>
    </div>
    </div>

    <div class="row">
        <div class="col-sm-12">

            
        </div>
        
    </div>
  </div>
</template>

<script>
// import CandidatesDetailsTab from "./components/CandidatesDetailsTab.vue"
// // import NotesThread from "./components/NotesThread.vue"

export default {
  name: "PayrollTab",
  components: {},
}
</script>
