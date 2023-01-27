<template>
   <div id="Users-all-Users" class="card card-table mt-2">
      <div class="card-body">
        <div class="row card-table-header">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="content-area">
              <h4 class="card-title text-brand">Users</h4>
              <p class="card-text pb-1" id="Users-all-Users-counts">
                <span class="total">4</span> Latest Users Acivity in The System
              </p>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-scroll-bars">
          <table id="Users-all-Users-table" class="table table-sm table-hover">
            <thead class="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">Eclipse ID</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>id</td>
                <td> user.forename </td>
                <td> user.email </td>
                <td>PAYE</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td>323466</td>
                <td class="col-actions">
                  <router-link
                    to="/Users/view"
                    class="icon-button bg-brand"
                    title="View Medical Locums Group"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                  <a href="#" class="icon-button bg-default" title="Shifts">
                    <i class="far fa-clock"></i>
                  </a>
                  <a href="#" class="icon-button bg-default" title="Payslips">
                    <i class="far fa-money-check"></i>
                  </a>
                  <a href="#" class="icon-button bg-default" title="Invoices">
                    <i class="far fa-file-invoice-dollar"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "DashboardTable",
  components: {},
}
</script>
