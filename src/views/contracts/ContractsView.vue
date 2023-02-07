<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="main-wrapper container">
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">Contracts</h1>
            <p class="main-sub-heading pb-4">
              List of all current contracts in the system
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
              placeholder="Search Contract"
              aria-label="Contract Search"
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

    <div id="Contracts-all-Contracts" class="card card-table">
      <div class="card-body">
        <div class="row card-table-header">
          <div class="col-md-6 col-sm-12">
            <div class="content-area">
              <h4 class="card-title text-brand">Contracts</h4>
              <p
                class="card-text main-sub-heading pb-4 mt-0"
                id="Contracts-all-Contracts-counts"
              >
                <span class="total">2</span> Contracts currently in the system
              </p>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-scroll-bars">
          <table id="Contracts-all-Contracts-table" class="table table-sm">
            <thead class="table-head">
              <tr>
                <th scope="col">Ref No</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Job Title</th>                
                <th scope="col">Consultant</th>
                <th scope="col">Time Stamp</th>
                <th scope="col">Rates Shifts</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr v-for="Contract in APIData.data" :key="Contract.id">
                <td>{{ Contract.id }}</td>
                <td>{{ Contract.forename }}</td>
                <td>{{ Contract.email }}</td>
                <td>PAYE</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td class="col-actions">
                  <router-link
                    to="/Contracts/view"
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
                <td>CON-1409</td>
                <td>02/02/2023</td>
                <td>02/02/2023</td>
                <td>RGN Band 5</td>
                <td>Rodney Doe</td>
                <td>01/02/2023 13:04:24</td>
                <td>Pay rate only</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/contracts/view"
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
                <td>CON-1410</td>
                <td>04/02/2023</td>
                <td>04/02/2023</td>
                <td>RGN Band 5</td>
                <td>Rodney Doe</td>
                <td>01/02/2023 13:04:24</td>
                <td>Pay rate only</td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/contracts/view"
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
          @pagination-change-page="getContracts"
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
// import CreateContractForm from "./Components/CreateContractForm.vue"

export default {
  name: "ContractsView",

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
      .get("/Contracts/", {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
      .then((response) => {
        console.log(response.data.Contracts)
        this.$store.state.APIData = response.data.Contracts
        this.status = "success"
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {
    getContracts(page) {
      if (typeof page === "undefined") {
        page = 1
      }

      this.$http
        .get("/Contracts?page=" + page)

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
