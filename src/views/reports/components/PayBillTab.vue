<template>
  <div class="main-content-panel my-2">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-xs-12 pl-3">
        <!-- Shifts on-hold this week !-->
        <div
          id="dashboard-shifts-on-hold"
          class="card card-danger stat-box mb-3"
        >
          <router-link
            to="/users"
            title="267 Shifts on-hold this week"
            class="card-body"
          >
            <div class="stat-box-wrapper">
              <h3 class="card-title stat-num text-danger">267</h3>
              <p class="card-text stat-text">Active Users This Week</p>
              <i class="icon far fa-clock text-danger"></i>
            </div>
            <div class="stat-trend">
              <span class="stat-data text-danger"
                ><i class="fas fa-arrow-alt-down"></i
                ><span class="stat-text">21%</span></span
              >
              since this time last week
            </div>
          </router-link>
        </div>
        <!-- End Shifts on-hold this week !-->
        </div>

    <!-- Second Column -->
        <div class="col-lg-6 col-md-6 col-xs-12 pr-2">
          <div
            id="dashboard-shifts-on-hold"
            class="card card-danger stat-box mb-3"
          >
            <router-link
              to="/users"
              title="267 Shifts on-hold this week"
              class="card-body"
            >
              <div class="stat-box-wrapper">
                <h3 class="card-title stat-num text-danger">267</h3>
                <p class="card-text stat-text">Active Users This Week</p>
                <i class="icon far fa-clock text-danger"></i>
              </div>
              <div class="stat-trend">
                <span class="stat-data text-danger"
                  ><i class="fas fa-arrow-alt-down"></i
                  ><span class="stat-text">21%</span></span
                >
                since this time last week
              </div>
            </router-link>
          </div>
        </div>
        <!--  -->
    </div>

  </div>
</template>

<script>
// import CandidatesDetailsTab from "./components/CandidatesDetailsTab.vue"
// // import NotesThread from "./components/NotesThread.vue"

export default {
  name: "PayBillTab",
  components: {},
}
</script>
