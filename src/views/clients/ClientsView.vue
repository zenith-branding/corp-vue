<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="main-wrapper container">
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">Clients</h1>
            <p class="main-sub-heading pb-4">
              List of all current Clients in the system
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
              placeholder="Search Candidate"
              aria-label="Candidate Search"
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

    <div id="Clients-all-Clients" class="card card-table">
      <div class="card-body">
        <div class="row card-table-header">
          <div class="col-md-6 col-sm-12">
            <div class="content-area">
              <h4 class="card-title text-brand">Clients</h4>
              <p
                class="card-text main-sub-heading pb-4 mt-0"
                id="Clients-all-Clients-counts"
              >
                <span class="total">2</span> Clients currently in the system
              </p>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-scroll-bars">
          <table id="Clients-all-Clients-table" class="table table-sm">
            <thead class="table-head">
              <tr>
                <th scope="col">Ref No</th>
                <th scope="col">Name</th>
                <th scope="col">Country</th>
                <th scope="col">Location</th>
                <th scope="col">Region</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr v-for="Candidate in APIData.data" :key="Candidate.id">
                <td>{{ Candidate.id }}</td>
                <td>{{ Candidate.forename }}</td>
                <td>{{ Candidate.email }}</td>
                <td>PAYE</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td class="col-actions">
                  <router-link
                    to="/Clients/view"
                    class="icon-button"
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
              <!--  -->
              <tr>
                <td>CLI-1409</td>
                <td>Mid Yorkshire Hospital</td>
                <td>United Kingdom</td>
                <td>Darlington</td>
                <td>North East</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/Clients/view"
                    class="icon-button"
                    title="View Medical Locums Group"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
                </td>
              </tr>
              <!--  -->
              <!--  -->
              <tr>
                <td>CAN-1410</td>
                <td>Mid Wales Hospital</td>
                <td>United Kingdom</td>
                <td>Llandrindon</td>
                <td>Wales</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/Clients/view"
                    class="icon-button"
                    title="View Medical Locums Group"
                  >
                    <i class="far fa-eye"></i>
                  </router-link>
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
import { Bootstrap5Pagination } from "laravel-vue-pagination"
import HeaderBottom from "../../components/HeaderBottom.vue"
import HeaderTop from "../../components/HeaderTop.vue"
import { mapState } from "vuex"
import { getAPI } from "../../utils/axios-api"
// import CreateCandidateForm from "./Components/CreateCandidateForm.vue"

export default {
  name: "ClientsView",

  components: {
    HeaderTop,
    HeaderBottom,
  },
  mounted() {
    console.log("Component mounted.")
  },
  data() {
    return {
      myModal: false,
    }
  },
  computed: mapState(["APIData"]),
  created() {
    getAPI
      .get("/Clients/", {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
      .then((response) => {
        console.log(response.data.Clients)
        this.$store.state.APIData = response.data.Clients
        this.status = "success"
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {
    getClients(page) {
      if (typeof page === "undefined") {
        page = 1
      }

      this.$http
        .get("/Clients?page=" + page)

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
