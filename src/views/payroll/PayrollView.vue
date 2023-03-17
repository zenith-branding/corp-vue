<template>
  <LayoutPayroll>
    <main class="row py-3">
        <!-- First Column -->
      <div class="col-lg-6 col-md-6 col-xs-12 md-pl-0">
        <!-- Shifts on-hold this week !-->
        <div
          id="Payroll-shifts-on-hold"
          class="card card-danger stat-box mb-3"
        >
          <router-link
            to="/candidates"
            title="Candidates"
            class="card-body"
          >
            <div class="stat-box-wrapper">
              <h3 class="card-title stat-num text-danger">1267</h3>
              <p class="card-text stat-text">Number of Umbrella</p>
              <i class="icon far fa-user-nurse text-warning"></i>
            </div>
            <div class="stat-trend">
              <span class="stat-data text-danger"
                ><i class="fas fa-arrow-alt-down"></i
                ><span class="stat-text">1%</span></span
              >
              since this time last week
            </div>
          </router-link>
        </div>
      </div>
      <!-- Second Column-->
      <div class="col-lg-6 col-md-6 col-xs-12 md-pr-0">
        <!-- Clients paid this week !-->
        <div
          id="Payroll-clients-paid"
          class="card card-success stat-box mb-3"
        >
          <router-link
            to="/candidates"
            title="Candidates"
            class="card-body"
          >
            <div class="stat-box-wrapper">
              <h3 class="card-title stat-num text-success">3392</h3>
              <p class="card-text stat-text">Number of PAYE</p>
              <i class="icon far fa-hospital text-success"></i>
            </div>
            <div class="stat-trend">
                <span class="stat-data text-success"
                ><i class="fas fa-arrow-alt-up"></i
                ><span class="stat-text">6%</span></span
              >

              since this time last week
            </div>
          </router-link>
        </div>
       
      </div>
    </main>
  </LayoutPayroll>
</template>

<script>
import LayoutPayroll from "./components/LayoutPayroll.vue"

export default {
  name: "PayrollView",
  components: {
    LayoutPayroll,
  },
}
</script>
