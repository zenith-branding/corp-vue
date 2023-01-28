<template>
  <LayoutDashboard>
    <main class="row">
      <div class="col-lg-6 col-md-6 col-xs-12 md-pl-0">
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
        <!-- END Shifts on-hold this week !-->
        <!-- Shifts pending this week !-->
        <div
          id="dashboard-shifts-pending"
          class="card card-primary stat-box mb-3"
        >
          <router-link
            to="/payroll/pending"
            title="430 Shifts pending this week"
            class="card-body"
          >
            <div class="stat-box-wrapper">
              <h3 class="card-title stat-num text-primary">430</h3>
              <p class="card-text stat-text">Shifts pending this week</p>
              <i class="icon far fa-user-clock text-primary"></i>
            </div>
            <div class="stat-trend">
              <span class="stat-data text-success"
                ><i class="fas fa-arrow-alt-up"></i
                ><span class="stat-text">46%</span></span
              >
              since this time last week
            </div>
          </router-link>
        </div>
        <!-- END Shifts pending this week !-->
        <!-- Candidates ready to pay this week !-->
        <div
          id="dashboard-candidates-ready-to-pay"
          class="card card-warning stat-box mb-3"
        >
          <router-link
            to="/payroll/ready-to-pay"
            title="113 Candidates ready to pay this week"
            class="card-body"
          >
            <div class="stat-box-wrapper">
              <h3 class="card-title stat-num text-warning">113</h3>
              <p class="card-text stat-text">
                Candidates ready to pay this week
              </p>
              <i class="icon far fa-user-nurse text-warning"></i>
            </div>
            <div class="stat-trend">
              <span class="stat-data text-danger"
                ><i class="fas fa-arrow-alt-down"></i
                ><span class="stat-text">14%</span></span
              >
              since this time last week
            </div>
          </router-link>
        </div>
        <!-- END Candidates ready to pay this week !-->
      </div>
      <!-- Second Column-->
      <div class="col-lg-6 col-md-6 col-xs-12 md-pr-0">
        <!-- Clients paid this week !-->
        <div
          id="dashboard-clients-paid"
          class="card card-success stat-box mb-3"
        >
          <router-link
            to="/invoices/outgoing/waiting-payment"
            title="£21,392 Clients paid this week"
            class="card-body"
          >
            <div class="stat-box-wrapper">
              <h3 class="card-title stat-num text-success">£21,392</h3>
              <p class="card-text stat-text">Clients paid this week</p>
              <i class="icon far fa-hospital text-success"></i>
            </div>
            <div class="stat-trend">
              <span class="stat-data text-danger"
                ><i class="fas fa-arrow-alt-down"></i
                ><span class="stat-text">5%</span></span
              >
              since this time last week
            </div>
          </router-link>
        </div>
        <!-- END Clients paid this week !-->
        <!-- Incoming Invoices Waiting to Recieve !-->
        <div
          id="dashboard-client-invoices-due"
          class="card stat-box card-warning mb-3"
        >
          <router-link
            to="/invoices/incoming/waiting-to-recieve"
            title="£4,293 Client invoices due"
            class="card-body"
          >
            <div class="stat-box-wrapper">
              <h3 class="card-title stat-num text-warning">£4,293</h3>
              <p class="card-text stat-text">Client invoices due this week</p>
              <i class="icon far fa-file-invoice-dollar text-warning"></i>
            </div>
            <div class="stat-trend">
              <span class="stat-data text-success"
                ><i class="fas fa-arrow-alt-up"></i
                ><span class="stat-text">27%</span></span
              >
              since this time last week
            </div>
          </router-link>
        </div>
        <!-- END Incoming Invoices Waiting to Recieve !-->
        <!-- Candidates amount to pay !-->
        <div
          id="dashboard-candidates-amount-to-pay"
          class="card stat-box card-danger"
        >
          <router-link
            to="/payroll/ready-to-pay"
            title="£15,034 Candidates amount to pay"
            class="card-body"
          >
            <div class="stat-box-wrapper">
              <h3 class="card-title stat-num text-danger">£15,034</h3>
              <p class="card-text stat-text">
                Candidates total to pay this week
              </p>
              <i class="icon far fa-user-md text-danger"></i>
            </div>
            <div class="stat-trend">
              <span class="stat-data text-danger"
                ><i class="fas fa-arrow-alt-down"></i
                ><span class="stat-text">43%</span></span
              >
              since this time last week
            </div>
          </router-link>
        </div>
        <!-- END Candidates amount to pay !-->
      </div>
    </main>
  </LayoutDashboard>
</template>

<script>
import LayoutDashboard from "./components/LayoutDashboard.vue"

export default {
  name: "DashboardView",
  components: {
    LayoutDashboard,
  },
}
</script>
