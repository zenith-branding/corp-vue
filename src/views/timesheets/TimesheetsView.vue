<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="main-wrapper container">
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">Timesheets</h1>
            <p class="main-sub-heading pb-4">
              List of all current Timesheets in the system
            </p>
            <!-- END Title Area !-->
          </div>
        </div>

        <div
          class="col-sm-6 d-sm-flex justify-content-end align-items-center pb-xs-5 pb-4"
        >
          <div class="button-area d-flex">
            <!-- Search Input Field !-->
            <input
              class="form-control mr-3"
              type="text"
              placeholder="Search Shift"
              aria-label="Shift Search"
            />
            <!-- END Search Input Field !-->
            <!-- Sort By Button !-->
            <select class="custom-select mr-3" id="inlineFormCustomSelect">
              <option selected>Sort By</option>
              <option value="1">Role</option>
              <option value="2">Name</option>
              <option value="3">Status</option>
            </select>
            <!-- END Sort By Button !-->
            <!-- Search Button Button !-->
            <a href="#" title="Add" class="btn btn-primary">
              <i class="far fa-search icon left mr-2"></i>Search
            </a>
            <!-- END Search Button Button !-->
          </div>
        </div>
      </div>
    </div>
    <div id="Timesheets-all-Timesheets" class="card card-table">
      <div class="card-body">
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
                <th scope="col">Candidate</th>
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
                <td>John Doe</td>
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
                    to="/client/view"
                    class="icon-button"
                    title="See Candidate"
                  >
                    <i class="far far fa-hospital"></i>
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
                <td>John Doe</td>
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
                    to="/client/view"
                    class="icon-button"
                    title="See Candidate"
                  >
                    <i class="far far fa-hospital"></i>
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
  name: "TimesheetsView",

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
      .get("/Timesheets/", {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
      .then((response) => {
        console.log(response.data.Timesheets)
        this.$store.state.APIData = response.data.Timesheets
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
