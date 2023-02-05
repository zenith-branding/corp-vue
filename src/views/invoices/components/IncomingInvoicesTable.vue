<template>
  <div class="col-lg-6 col-md-12 col-sm-12 m-md-b m-sm-b m-xs-b mb-3">
    <div id="dashboard-candidates-waiting-payroll" class="card">
      <div class="card-body">
        <h2 class="card-title text-success mb-3">
          Latest Client Payments Waiting to Receive
        </h2>
        <div class="table-responsive">
          <table
            id="dashboard-lastest-batch-payments-ready"
            class="table table-sm table-hover"
          >
            <thead class="table-head">
              <tr>
                <th scope="col">Client ID</th>
                <th scope="col">Client</th>
                <th scope="col">No of Shits</th>
                <th scope="col">Amount</th>
                <th scope="col">Period</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>CL-1</td>
                <td>Nuffield Hospital Chichester</td>
                <td>178</td>
                <td>£3,503</td>
                <td>03-01-2023</td>
                <td class="col-actions">
                  <router-link
                    to="/payroll/ready-to-pay/batch"
                    class="icon-button bg-success"
                    title="View"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>CL-2</td>
                <td>Spire Hospital St Athony's</td>
                <td>145</td>
                <td>£4,330</td>
                <td>05-01-2023</td>
                <td class="col-actions">
                  <router-link
                    to="/payroll/ready-to-pay/batch"
                    class="icon-button bg-success"
                    title="View"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>CL-3</td>
                <td>HCA Lister Hospital</td>
                <td>140</td>
                <td>£2,900</td>
                <td>08-01-2023</td>
                <td class="col-actions">
                  <router-link
                    to="/payroll/ready-to-pay/batch"
                    class="icon-button bg-success"
                    title="View"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>CL-4</td>
                <td>Ramsay Health Care - New Hall Hospital</td>
                <td>230</td>
                <td>£9,674</td>
                <td>12-01-2023</td>
                <td class="col-actions">
                  <router-link
                    to="/payroll/ready-to-pay/batch"
                    class="icon-button bg-success"
                    title="View"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>CL-5</td>
                <td>Nuffield Hospital Chichester</td>
                <td>320</td>
                <td>£12,283</td>
                <td>15-01-2023</td>
                <td class="col-actions">
                  <router-link
                    to="/payroll/ready-to-pay/batch"
                    class="icon-button bg-success"
                    title="View"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>CL-6</td>
                <td>Spire Hospital St Athony's</td>
                <td>144</td>
                <td>£4,343</td>
                <td>16-01-2023</td>
                <td class="col-actions">
                  <router-link
                    to="/payroll/ready-to-pay/batch"
                    class="icon-button bg-success"
                    title="View"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <router-link
          to="/invoices/incoming/"
          title="See All Incoming"
          class="btn btn-sm btn-primary mt-3"
        >
          See All Incoming
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomingInvoicesTable",
  components: {},
}
</script>
