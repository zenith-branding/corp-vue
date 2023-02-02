<template>
  <LayoutAccount>
   <div class="main-content user-main">
      <div class="main-content-panel my-2">
        <div class="card mb-3">
          <div class="card-body tabs-wrapper p-4">
            <div class="row">
              <div class="col-xl-3 col-sm-12">
                <!-- Tab Buttons -->
                <ul class="accordion-tabs">
                  <li
                    v-for="(tab, index) in tabs"
                    @click="currentTab = index"
                    :key="tab.title"
                    :class="{ active: currentTab === index }"
                  >
                    <a
                      class="text-left btn btn-info w-100 m-1 p-3"
                      :title="tab.title"
                    >
                      <i :class="tab.icon"></i>{{ tab.title }}</a
                    >
                  </li>
                </ul>
                <!-- END Tab Buttons -->
              </div>
              <div class="col-xl-9 col-sm-12">
                <div class="tab-contents">
                  <!-- START Candidate Address !-->
                  <div
                    v-show="currentTab === 0"
                    class="tab-content"
                    id="candidate-addresses"
                  >
                    <div class="row button-row mb-3 p-1 pt-4 pt-xl-0">
                      <div class="col-sm-12">
                        <div class="d-flex justify-content-between">
                          <div>
                            <h4 class="card-title text-brand pb-1">Addresses</h4>
                            <p class="card-text sub-heading">
                              Addresses for John Doe in the system
                            </p>
                          </div>

                          <div class="button-area">
                            <router-link
                              to="/users/view/addresses/create"
                              class="btn btn-brand"
                              title="Add New Address"
                              ><i class="far fa-plus icon left mr-2"></i>Add
                              Address</router-link
                            >
                          </div>
                        </div>
                        <ul class="list-group notes mt-4">
                          <li class="list-group-item position-relative">
                            <div class="p-2">

                            
                            <span class="font-weight-bold">Address 1</span
                            ><br />
                            <br />
                            Alanod, Chippenham Dr <br />
                            Milton Keynes<br />
                            MK10 0AN
                            <router-link
                              to="/users/view/addresses/view"                  
                              title="View Note"
                            >
                              <span class="btn icon-brc"
                                ><i class="fas fa-edit mr-1"></i>Edit</span
                              >
                            </router-link>
                          </div>
                          </li>
                          <li class="list-group-item position-relative mt-2">
                            <div class="p-2">
                            <span class="font-weight-bold">Address 2</span
                            ><br />
                            <br />
                            Alanod, Chippenham Dr <br />
                            Milton Keynes <br />MK10 0AN
                            <router-link
                              to="/users/view/addresses/view"
                              title="View Note"
                            >
                            <span class="btn icon-brc"
                                ><i class="fas fa-edit mr-1"></i>Edit</span
                              >
                            </router-link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- END Candidate Address !-->
                  <!-- START Candidate Contact Numbers !-->
                  <div
                    v-show="currentTab === 1"
                    class="tab-content"
                    id="candidate-contact-number"
                  >
                    <div class="row button-row mb-3 p-1 pt-4 pt-lg-0">
                      <div class="col-sm-12">
                        <h4 class="card-title text-brand pb-3">Contact Numbers</h4>
                        <p class="card-text sub-heading">
                          <label for="validationDefault01">Mobile Phone:</label>
                          <input
                            type="text"
                            class="form-control mb-3"
                            id="validationDefault01"
                            placeholder="07354898956"
                          />
                          <label for="validationDefault01"
                            >Landline Phone:</label
                          >
                          <input
                            type="text"
                            class="form-control mb-3"
                            id="validationDefault02"
                            placeholder="01354898956"
                          />
                          <button type="submit" class="btn btn-primary mt-3">
                            Update
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- END Candidate Contact Numbers !-->
                  <!-- START Candidate Email Addresses !-->
                  <div
                    v-show="currentTab === 2"
                    class="tab-content"
                    id="candidate-email-addresses"
                  >
                    <div class="row button-row mb-3 p-1 pt-4 pt-lg-0">
                      <div class="col-sm-12">
                        <h4 class="card-title text-brand pb-3">Email Addresses</h4>
                        <p class="card-text sub-heading">
                          <label for="validationDefault01"
                            >Email Address:</label
                          >
                          <input
                            type="text"
                            class="form-control mb-3"
                            id="validationDefault01"
                            placeholder="info@mlg.co.uk"
                          />
                          <button type="submit" class="btn btn-primary mt-3">
                            Update
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- END Candidate Email Addresses !-->
                  <!-- START Candidate General Details !-->
                  <div
                    v-show="currentTab === 3"
                    class="tab-content active"
                    id="candidate-general-details"
                  >
                    <div class="row button-row mb-3 p-1 pt-4 pt-lg-0">
                      <div class="col-sm-12">
                        <div class="d-flex justify-content-between">
                          <div>
                            <h4 class="card-title text-brand pb-1">Activity</h4>
                            <p class="card-text sub-heading pb-3">
                              Activity for John Doe in the system
                            </p>
                          </div>

                          <div class="button-area">
                            <a
                              href="#"
                              title="Edit John Doe's Details"
                              class="btn btn-brand"
                            >
                              <i class="far fa-plus icon left mr-2"></i>
                              Add note
                            </a>
                          </div>
                        </div>
                        <div class="table-responsive hide-scroll-bars pt-3">
                          <table
                            id="Users-all-Users-table"
                            class="table table-sm table-hover"
                          >
                            <thead class="table-head">
                              <tr>
                                <th scope="col">Type</th>
                                <th scope="col">Model</th>
                                <th scope="col">Date</th>
                              </tr>
                            </thead>
                            <tbody class="table-body">
                              <tr>
                                <td>
                                  <span class="badge badge-pill badge-warning"
                                    >Update</span
                                  >
                                </td>
                                <td>Address</td>
                                <td>
                                  <span>22/01/2023</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span class="badge badge-pill badge-success"
                                    >Create</span
                                  >
                                </td>
                                <td>Note</td>
                                <td>
                                  <span>16/01/2023</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span class="badge badge-pill badge-danger"
                                    >Delete</span
                                  >
                                </td>
                                <td>Note</td>
                                <td>
                                  <span>11/01/2023</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- END Candidate General Details !-->
                  <!-- START Candidate Notes !-->
                  <div
                    v-show="currentTab === 4"
                    class="tab-content"
                    id="candidate-email-addresses"
                  >
                    <div class="row button-row mb-3 p-1 pt-4 pt-lg-0">
                      <div class="col-sm-12">
                        <div class="d-flex justify-content-between">
                          <div>
                            <h4 class="card-title text-brand pb-1">Notes</h4>
                            <p class="card-text sub-heading pb-3">
                              Notes for John Doe in the system
                            </p>
                          </div>

                          <div class="button-area">
                            <router-link
                              to="/users/view/notes/create"
                              class="btn btn-brand"
                              title="Create New Note"
                              ><i class="far fa-plus icon left mr-2"></i>

                              Add note</router-link
                            >
                            <!-- <a
                              href="#"
                              title="Edit John Doe's Details"
                              class="btn btn-brand"
                            >
                              <i class="far fa-plus icon left mr-2"></i>

                              Add note
                            </a> -->
                          </div>
                        </div>
                        <ul class="list-group notes mt-3">
                          <li class="list-group-item p-3">
                            <router-link
                              to="/users/view/notes/view"
                              class="list-selector"
                              title="View Note"
                            >
                              Cras justo odio
                              <span class="float-right">
                                24th January 2023</span
                              >
                            </router-link>
                          </li>
                          <li class="list-group-item p-3">
                            <router-link
                              to="/users/view/notes/view"
                              class="list-selector"
                              title="View Note"
                            >
                              Dapibus ac facilisis in
                              <span class="float-right">
                                14th January 2023</span
                              >
                            </router-link>
                          </li>
                          <li class="list-group-item p-3">
                            <router-link
                              to="/users/view/notes/view"
                              class="list-selector"
                              title="View Note"
                            >
                              Cras justo odio
                              <span class="float-right">
                                12th January 2023</span
                              >
                            </router-link>
                          </li>
                          <li class="list-group-item p-3">
                            <router-link
                              to="/users/view/notes/view"
                              class="list-selector"
                   S           title="View Note"
                            >
                              Porta ac consectetur ac
                              <span class="float-right"> 7th January 2023</span>
                            </router-link>
                          </li>
                          <li class="list-group-item p-3">
                            <router-link
                              to="/users/view/notes/view"
                              class="list-selector"
                              title="View Note"
                            >
                              Vestibulum at eros
                              <span class="float-right"> 6th January 2023</span>
                            </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- END Candidate Notes !-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutAccount>
</template>

<script>
import LayoutAccount from "./Components/LayoutAccount.vue"

export default {
  name: "Account",
  components: {
    LayoutAccount,
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          title: "Addresses",
          icon: "far fa-map-marker-alt icon left mr-2 lg",
        },
        {
          title: "Contact Numbers",
          icon: "far fa-phone icon left mr-2 lg",
        },
        {
          title: "Email Addresses",
          icon: "far fa-envelope icon left mr-2 lg",
        },
        {
          title: "Activity",
          icon: "far fa-user icon left mr-2 lg",
        },
        {
          title: "Notes",
          icon: "<far far fa-sticky-note mr-2 lg",
        },
      ],
    }
  },
}
</script>
