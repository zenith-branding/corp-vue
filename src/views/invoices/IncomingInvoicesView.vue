<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="main-wrapper container">
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">All Incoming Invoices</h1>
            <p class="main-sub-heading">
              List of all incoming invoices in the system
            </p>
            <!-- END Title Area !-->
          </div>
        </div>

        <div
          class="col-sm-6 d-sm-flex justify-content-end align-items-center pb-xs-5"
        >
          <div class="button-area d-flex">
            <!-- Sort By Button !-->
            <select class="custom-select mr-3" id="inlineFormCustomSelect">
              <option selected>Sort By</option>
              <option value="1">Client</option>
              <option value="2">Status</option>
              <option value="3">Date</option>
            </select>
            <!-- END Sort By Button !-->
            <!-- Search Button Button !-->
            <a href="#" title="Add" class="btn btn-primary mr-3">
              <i class="far fa-search icon left mr-2"></i>Search
            </a>
            <!-- END Search Button Button !-->
            <!-- Search Input Field !-->
            <input
              class="form-control"
              type="text"
              placeholder="Search Invoice"
              aria-label="Invoice Search"
            />
            <!-- END Search Input Field !-->
          </div>
        </div>
      </div>
    </div>
    <div id="Invoices-all-Invoices" class="card card-table">
      <div class="card-body">
        <div class="row card-table-header">
          <div class="col-md-6 col-sm-12">
            <div class="content-area">
              <h4 class="card-title text-brand">Invoices</h4>
              <p class="card-text pb-1" id="Invoices-all-Invoices-counts">
                <span class="total">4</span> Invoices currently in the system
              </p>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-scroll-bars">
          <table
            id="invoices-all-incoming-invoices-table"
            class="table data-heavy table-sm table-hover"
          >
            <thead class="table-head">
              <tr>
                <th scope="col">#</th>
                <th scope="col">MLG Ref No.</th>
                <th scope="col">Shift ID</th>
                <th scope="col">Client</th>
                <th scope="col">Invoice Date</th>
                <th scope="col">Sub Total</th>
                <th scope="col">VAT</th>
                <th scope="col">Total</th>
                <th scope="col">Batch ID</th>
                <th scope="col">Status</th>
                <th scope="col">Paid Date</th>
                <th scope="col">Overdue</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr>
                <td>IN-1</td>
                <td>MLG-374823</td>
                <td>SH-343424</td>
                <td>Nuffield Hospital Chichester</td>
                <td>29-01-2021</td>
                <td>£108.00</td>
                <td>-</td>
                <td>£135.00</td>
                <td>BA-348903</td>
                <td>
                  <span class="badge badge-pill badge-success">Settled</span>
                </td>
                <td>23-01-2021</td>
                <td>-</td>
                <td class="col-actions hover-primary">
                  <a href="#" class="icon-button bg-brand" title="View Invoice">
                    <i class="far fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="Download Invoice"
                  >
                    <i class="fas fa-arrow-alt-down"></i>
                  </a>
                  
                </td>
              </tr>
              <tr>
                <td>IN-2</td>
                <td>MLG-543545</td>
                <td>SH-234345</td>
                <td>Spire Hospital St Athony's</td>
                <td>29-01-2021</td>
                <td>£320.00</td>
                <td>£80.00</td>
                <td>£400.00</td>
                <td>BA-453454</td>
                <td>
                  <span class="badge badge-pill badge-warning"
                    >Waiting to Receive</span
                  >
                </td>
                <td>-</td>
                <td>2 days</td>
                <td class="col-actions hover-primary">
                  <a href="#" class="icon-button bg-brand" title="View Invoice">
                    <i class="far fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="Download Invoice"
                  >
                    <i class="fas fa-arrow-alt-down"></i>
                  </a>
                  
                </td>
              </tr>
              <tr>
                <td>IN-3</td>
                <td>MLG-374823</td>
                <td>SH-343424</td>
                <td>HCA Lister Hospital</td>
                <td>29-01-2021</td>
                <td>£108.00</td>
                <td>-</td>
                <td>£135.00</td>
                <td>BA-348903</td>
                <td>
                  <span class="badge badge-pill badge-success">Settled</span>
                </td>
                <td>23-01-2021</td>
                <td>-</td>
                <td class="col-actions hover-primary">
                  <a href="#" class="icon-button bg-brand" title="View Invoice">
                    <i class="far fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="Download Invoice"
                  >
                    <i class="fas fa-arrow-alt-down"></i>
                  </a>
                  
                </td>
              </tr>
              <tr>
                <td>IN-4</td>
                <td>MLG-543545</td>
                <td>SH-234345</td>
                <td>Ramsay Health Care - New Hall Hospital</td>
                <td>29-01-2021</td>
                <td>£320.00</td>
                <td>£80.00</td>
                <td>£400.00</td>
                <td>BA-453454</td>
                <td>
                  <span class="badge badge-pill badge-warning"
                    >Waiting to Receive</span
                  >
                </td>
                <td>-</td>
                <td>4 days</td>
                <td class="col-actions hover-primary">
                  <a href="#" class="icon-button bg-brand" title="View Invoice">
                    <i class="far fa-eye"></i>
                  </a>
                  <a
                    href="#"
                    class="icon-button bg-default"
                    title="Download Invoice"
                  >
                    <i class="fas fa-arrow-alt-down"></i>
                  </a>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- https://laravel-vue-pagination.org/guide/install.html#install -->
        <Bootstrap5Pagination
          :data="APIData"
          @pagination-change-page="getUsers"
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
import { Bootstrap5Pagination } from "laravel-vue-pagination"
import HeaderBottom from "../../components/HeaderBottom.vue"
import HeaderTop from "../../components/HeaderTop.vue"
import { mapState } from "vuex"
import { getAPI } from "../../utils/axios-api"

export default {
  name: "InvoicesView",

  components: {
    HeaderTop,
    HeaderBottom,
  },
  mounted() {
    console.log("Component mounted.")
  },
  computed: mapState(["APIData"]),
  created() {
    getAPI
      .get("/invoices/", {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
      .then((response) => {
        console.log(response.data.Invoices)
        this.$store.state.APIData = response.data.Invoices
        this.status = "success"
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {
    getUsers(page) {
      if (typeof page === "undefined") {
        page = 1
      }

      this.$http
        .get("/users?page=" + page)

        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((data) => {
          this.laravelData = data
        })
    },
  },
}
</script>
