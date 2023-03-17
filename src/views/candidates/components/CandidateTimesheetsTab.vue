<template>

    <div class="main-content user-main">
      <div class="main-content-panel my-2 card">
          <div class="card-body tabs-wrapper p-4">
        <div class="row card-table-header">
          <div class="col-md-6 col-sm-12">
            <div class="content-area">
              <h4 class="card-title text-brand">Timesheets</h4>
              <p
                class="card-text pb-4 mt-0"
                id="Timesheets-all-Timesheets-counts"
              >
                <span class="total">2</span> Timesheets currently in the system
              </p>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-scroll-bars">
          <table
            id="Timesheets-all-Timesheets-table"
            class="table table-sm table-hover"
          >
            <thead class="table-head">
              <tr>
                <th scope="col">Ref No</th>

                <th scope="col">Candidate Location</th>
                <th scope="col">Client</th>
                <th scope="col">Client Location</th>
                <th scope="col">Invoice Status</th>
                <th scope="col">Invoice ID</th>
                <th scope="col" class="col-actions">View</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>TSH-252948</td>
                <td>Cambridge</td>
                <td>Nuffield Hospital</td>
                <td>East of England</td>
                <td>
                  <span class="badge badge-pill badge-success">Paid</span>
                </td>

                <td>IN-8495843</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/timesheets/view"
                    class="icon-button"
                    title="View Timesheet"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>


                                    <router-link
                    to="/candidate/view"
                    class="icon-button"
                    title="See Candidate"
                  >
                    <i class="far fa-user-nurse"></i>
                  </router-link>
                  <router-link
                    to="/invoices/incoming"
                    class="icon-button"
                    title="See Invoice"
                  >
                    <i class="far fa-file-invoice-dollar"></i>
                  </router-link>

                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="Send Payment Breakdown Email"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                  <a href="#" class="icon-button bg-default" title="See Batch">
                    <i class="far fa-receipt"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>TSH-252948</td>
                <td>Cambridge</td>
                <td>Nuffield Hospital</td>
                <td>East of England</td>
                <td>
                  <span class="badge badge-pill badge-success p-lg">Paid</span>
                </td>

                <td>IN-8495843</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/timesheets/view"
                    class="icon-button"
                    title="View Timesheet"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>


                                    <router-link
                    to="/candidate/view"
                    class="icon-button"
                    title="See Candidate"
                  >
                    <i class="far fa-user-nurse"></i>
                  </router-link>
                  
                  <router-link
                    to="/invoices/incoming"
                    class="icon-button"
                    title="See Invoice"
                  >
                    <i class="far fa-file-invoice-dollar"></i>
                  </router-link>

                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="Send Payment Breakdown Email"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                  <a href="#" class="icon-button bg-default" title="See Batch">
                    <i class="far fa-receipt"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
  </div>








</template>

<script>

import TimesheetsHeader from "../../timesheets/components/TimesheetsHeader.vue"

export default {
  name: "CandidateTimesheetsTab",
  components: {
    TimesheetsHeader,
  },
}
</script>
