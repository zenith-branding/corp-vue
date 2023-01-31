<template>
  <div class="col-lg-6 col-md-12 col-sm-12 m-md-b m-sm-b m-xs-b">
    <div id="dashboard-candidates-waiting-payroll" class="card">
      <div class="card-body">
        <h2 class="card-title text-success mb-3">
          Latest Candidates Awaiting Payment
        </h2>
        <div class="table-responsive">
          <table
            id="dashboard-lastest-batch-payments-ready"
            class="table table-sm table-hover"
          >
            <thead class="table-head">
              <tr>
                <th scope="col">Candidate ID</th>
                <th scope="col">Candidate</th>
                <th scope="col">No of Shits</th>
                <th scope="col">Amount</th>
                <th scope="col">Period</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>CA-1</td>
                <td>John Doe</td>
                <td>2</td>
                <td>£764</td>
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
                <td>CA-2</td>
                <td>Jane Doe</td>
                <td>1</td>
                <td>£345</td>
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
                <td>CA-3</td>
                <td>Jack Doe</td>
                <td>3</td>
                <td>£854</td>
                <td>04-01-2023</td>
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
                <td>CA-4</td>
                <td>Joe Doe</td>
                <td>1</td>
                <td>£345</td>
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
                <td>CA-5</td>
                <td>Jenny Doe</td>
                <td>4</td>
                <td>£560</td>
                <td>04-01-2023</td>
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
                <td>CA-6</td>
                <td>Jaquine Doe</td>
                <td>1</td>
                <td>£345</td>
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
            </tbody>
          </table>
        </div>
        <router-link
          to="/invoices/outgoing/"
          title="See All Outgoing"
          class="btn btn-sm btn-primary mt-3"
        >
          See All Outgoing
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutgoingInvoicesTable",
  components: {},
}
</script>
