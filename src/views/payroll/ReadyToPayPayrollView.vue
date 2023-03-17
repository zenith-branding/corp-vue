<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="main-wrapper container">
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">Batch Payments Ready to Pay</h1>
            <p class="main-sub-heading pb-4">
              List of all batch payments ready to pay in the system
            </p>
            <!-- END Title Area !-->
          </div>
        </div>
        <div
          class="col-sm-6 d-sm-flex justify-content-end align-items-center pb-xs-5 pb-4"
        >
          <div class="button-area d-flex">
            <!-- Search Button Button !-->
            <a href="#" title="Add" class="btn btn-primary">
              <i class="far fa-search icon left mr-2"></i>Search
            </a>
            <!-- END Search Button Button !-->
          </div>
        </div>
      </div>
    </div>

    <div id="payroll-ready-to-pay-payroll" class="card card-table">
      <div class="card-body">
        <div class="row card-table-header">
          <div class="col-md-6 col-sm-12">
            <div class="content-area">
              <h4 class="card-title text-brand">List of all Batches Ready to Pay</h4>
              <p class="card-text main-sub-heading pb-4 mt-0">
                <span class="total">2</span> batches ready to pay currently in
                the system
              </p>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-scroll-bars">
          <table id="payroll-ready-to-pay-payroll-table" class="table table-sm">
            <thead class="table-head">
              <tr>
                <th scope="col">Batch ID</th>
                <th scope="col">To Pay Date</th>
                <th scope="col">No. Shifts</th>
                <th scope="col">No. Candidates</th>
                <th scope="col">No. Clients</th>
                <th scope="col">Start Period</th>
                <th scope="col">End Period</th>
                <th scope="col">Total Net</th>
                <th scope="col">Total Gross</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>BA-1</td>
                <td>03-02-2023</td>
                <td>223</td>
                <td>159</td>
                <td>145</td>
                <td>29-01-2023</td>
                <td>30-01-2023</td>
                <td>£14,905.00</td>
                <td>£11,924.40</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/payroll"
                    class="icon-button"
                    title="View Batch"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                  
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="Mark as Paid"
                  >
                    <i class="far fa-check"></i>
                  </a>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="See Invoices"
                  >
                    <i class="far fa-file-invoice-dollar"></i>
                  </a>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="See Candidate"
                  >
                    <i class="far fa-user-nurse"></i>
                  </a>
                  <a href="#" class="icon-button bg-default" title="See Client">
                    <i class="far fa-hospital"></i>
                  </a>
                  
                </td>
              </tr>
              <!--  -->
             <tr>
                <td>BA-2</td>
                <td>03-03-2023</td>
                <td>224</td>
                <td>169</td>
                <td>175</td>
                <td>19-03-2023</td>
                <td>20-03-2023</td>
                <td>£10,905.00</td>
                <td>£8,924.40</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/payroll"
                    class="icon-button"
                    title="View Batch"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="Mark as Paid"
                  >
                    <i class="far fa-check"></i>
                  </a>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="See Invoices"
                  >
                    <i class="far fa-file-invoice-dollar"></i>
                  </a>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="See Candidate"
                  >
                    <i class="far fa-user-nurse"></i>
                  </a>
                  <a href="#" class="icon-button bg-default" title="See Client">
                    <i class="far fa-hospital"></i>
                  </a>
                  
                </td>
              </tr>
              <!--  -->

            </tbody>
          </table>
        </div>
        <!-- https://laravel-vue-pagination.org/guide/install.html#install -->
        <Bootstrap5Pagination
          :data="APIData"
          @pagination-change-page="getClients"
        />
        <div class="pagination-wrapper mt-3">
          <nav>
            <ul class="pagination">
              <li class="page-item disabled">
                <span class="page-link">‹</span>
              </li>
              <li class="page-item active">
                <span class="page-link">1</span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">›</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from "../../components/HeaderBottom.vue"
import HeaderTop from "../../components/HeaderTop.vue"

export default {
  name: "ReadyToPayPayrollView",
  components: {
    HeaderBottom,
    HeaderTop,
  },
}
</script>
