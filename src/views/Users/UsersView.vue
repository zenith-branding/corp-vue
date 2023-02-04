<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="main-wrapper container">
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">Users</h1>
            <p class="main-sub-heading pb-4">
              List of all current users in the system
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
              placeholder="Search User"
              aria-label="User Search"
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
        <div class="col-12 mb-3">
          <div class="d-flex justify-content-end">
            <!-- Add User Button !-->
            <h2 class="h4 text-primary mr-3 mt-2">Add new user to the sytem</h2>

            <a
              href="#"
              title="Add"
              class="btn btn-primary"
              @click="myModal = !myModal"
            >
              <i class="far fa-plus icon left mr-2"></i>Create user
            </a>
            <!-- END Add User Button !-->
          </div>
        </div>
      </div>
    </div>

    <div id="Users-all-Users" class="card card-table">
      <div class="card-body">
        <div class="row card-table-header">
          <div class="col-md-6 col-sm-12">
            <div class="content-area">
              <h4 class="card-title text-brand">Users</h4>
              <p
                class="card-text main-sub-heading pb-4 mt-0"
                id="Users-all-Users-counts"
              >
                <span class="total">4</span> Users currently in the system
              </p>
            </div>
          </div>
        </div>
        <div class="table-responsive hide-scroll-bars">
          <table id="Users-all-Users-table" class="table table-sm">
            <thead class="table-head">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col" class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody class="table-body">
              <tr v-for="user in APIData.data" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.forename }}</td>
                <td>{{ user.email }}</td>
                <td>PAYE</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td class="col-actions">
                  <router-link
                    to="/users/view"
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
                <td>user.id</td>
                <td>user.forename</td>
                <td>user.email</td>
                <td>PAYE</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/users/view"
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
                <td>user.id</td>
                <td>user.forename</td>
                <td>user.email</td>
                <td>PAYE</td>
                <td>
                  <span class="badge badge-pill badge-success">Active</span>
                </td>
                <td class="col-actions hover-primary">
                  <router-link
                    to="/users/view"
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
  <!-- modal user registration -->
  <transition name="fade">
    <div v-if="myModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button class="close" @click="myModal = !myModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h4 class="modal-title">Create New User</h4>
              <div class="modal-body">
                <CreateUserForm />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="myModal = !myModal">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="myModal = !myModal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Bootstrap5Pagination } from "laravel-vue-pagination"
import HeaderBottom from "../../components/HeaderBottom.vue"
import HeaderTop from "../../components/HeaderTop.vue"
import { mapState } from "vuex"
import { getAPI } from "../../utils/axios-api"
import CreateUserForm from "./Components/CreateUserForm.vue"

export default {
  name: "UsersView",

  components: {
    HeaderTop,
    HeaderBottom,
    CreateUserForm,
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
      .get("/users/", {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
      .then((response) => {
        console.log(response.data.users)
        this.$store.state.APIData = response.data.users
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.5s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-dialog {
  background: #fdfdfd;
}
.modal-title{
  padding: 1rem 2.5rem 0rem
}

.modal-content{
  border-radius: 0;
}

.close:hover{
  cursor: pointer;
}
</style>
