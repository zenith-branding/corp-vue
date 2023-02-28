<template>
  <LayoutUsersDetails>
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
              <div class="col-xl-9 col-sm-12 pt-5 pt-xl-0">
                <div class="tab-contents">
                  <!-- START Candidate Address !-->
                  <div
                    v-show="currentTab === 0"
                    class="tab-content"
                    id="candidate-addresses"
                  >
                    <div class="row button-row mb-3 p-1 pt-xl-0">
                      <div class="col-sm-12">
                        <div class="d-flex justify-content-between">
                          <div>
                            <h4 class="card-title text-brand pb-1">
                              Addresses
                            </h4>
                            <p class="card-text sub-heading">
                              Addresses for John Doe in the system
                            </p>
                          </div>

                          <div class="button-area">
                            <router-link
                              to="/users/view/addresses/create"
                              class="btn btn-primary"
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
                                title="Edit Address"
                              >
                                <span class="btn icon-brc-edit"
                                  ><i class="fas fa-edit mr-1"></i
                                ></span>
                              </router-link>
                              <a
                                href="javascript:;"
                                v-on:click="deleteAddress(0, 0)"
                                class="mr-2"
                                title="Delete Address"
                              >
                                <span class="btn icon-brc-trash"
                                  ><i class="far fa-solid fa-trash"></i> </span
                              ></a>
                            </div>
                          </li>
                          <li class="list-group-item position-relative mt-2">
                            <div class="p-2">
                              <span class="font-weight-bold">Address 1</span
                              ><br />
                              <br />
                              Alanod, Chippenham Dr <br />
                              Milton Keynes<br />
                              MK10 0AN
                              <router-link
                                to="/users/view/addresses/view"
                                title="Edit Address"
                              >
                                <span class="btn icon-brc-edit"
                                  ><i class="fas fa-edit mr-1"></i
                                ></span>
                              </router-link>
                              <a
                                href="javascript:;"
                                v-on:click="deleteAddress(0, 0)"
                                class="mr-2"
                                title="Delete Address"
                              >
                                <span class="btn icon-brc-trash"
                                  ><i class="far fa-solid fa-trash"></i> </span
                              ></a>
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
                    <div class="row button-row mb-3 p-1 pt-xl-0">
                      <div class="col-sm-12">
                        <h4 class="card-title text-brand pb-3">
                          Contact Numbers
                        </h4>
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
                    <div class="row button-row mb-3 p-1 pt-xl-0">
                      <div class="col-sm-12">
                        <h4 class="card-title text-brand pb-3">
                          Email Addresses
                        </h4>
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
                    <div class="row button-row mb-3 p-1 pt-xl-0">
                      <div class="col-sm-12">
                        <div class="d-flex justify-content-between">
                          <div>
                            <h4 class="card-title text-brand pb-1">Activity</h4>
                            <p class="card-text sub-heading pb-3">
                              Activity for John Doe in the system
                            </p>
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
                  <!-- START user Notes !-->
                  <div
                    v-show="currentTab === 4"
                    class="tab-content notes-tab"
                  >
                    <div class="row button-row mb-3 p-1 pt-xl-0">
                      <div class="col-sm-12">
                        <div class="d-flex justify-content-between">
                          <div>
                            <h4 class="card-title text-brand pb-1">Notes</h4>
                            <p class="card-text sub-heading pb-3">
                              Notes for John Doe in the system
                            </p>
                          </div>
                        </div>
                        <div class="table-responsive hide-scroll-bars pt-3">
                          <table
                            id="Users-all-Users-table"
                            class="table table-sm table-hover"
                          >
                            <tbody class="table-body">
                              <tr>
                                <td>Medical Locums Note </td>
                                <td>
                                  <span>22/01/2023</span>
                                </td>
                                <td class="col-actions hover-primary">
                                  <router-link
                                    to="/users/view/notes/view"
                                    class="icon-button"
                                    title="View Medical Locums Group"
                                  >
                                    <i class="far fa-eye"></i>
                                  </router-link>
                                </td>
                              </tr>
                              <tr>
                                <td>Porta ac consectetur ac</td>
                                <td>
                                  <span>16/01/2023</span>
                                </td>
                                <td class="col-actions hover-primary">
                                  <router-link
                                    to="/users/view/notes/view"
                                    class="icon-button"
                                    title="View Medical Locums Group"
                                  >
                                    <i class="far fa-eye"></i>
                                  </router-link>
                                </td>
                              </tr>
                              <tr>
                                
                                <td>Note</td>
                                <td>
                                  <span>11/01/2023</span>
                                </td>
                                <td class="col-actions hover-primary">
                                  <router-link
                                    to="/users/view/notes/view"
                                    class="icon-button"
                                    title="View Medical Locums Group"
                                  >
                                    <i class="far fa-eye"></i>
                                  </router-link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- END user Notes !-->
                                    <!-- START user Notes !-->
                  <div
                    v-show="currentTab === 5"
                    class="tab-content notes-tab"
                  >
                    <div class="row button-row mb-3 p-1 pt-xl-0">
                      <div class="col-sm-12">
                        <div class="d-flex justify-content-between">
                          <div>
                            <h4 class="card-title text-brand pb-1">Notes Thread</h4>
                            <p class="card-text sub-heading pb-3">
                              24 Notes for John Doe in the system
                            </p>
                          </div>
                          <div class="button-area">
                            <router-link
                              to="/users/view/notes/create"
                              class="btn btn-primary"
                              title="Add New Note"
                              ><i class="far fa-plus icon left mr-2"></i>Add
                              Note</router-link
                            >
                          </div>
                        </div>
                        <NotesThread />
                 </div>
              </div>
              </div>
                  <!-- END user Notes !-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutUsersDetails>
</template>

<script>
import LayoutUsersDetails from "./components/LayoutUsersDetails.vue"
import NotesThread from "./components/NotesThread.vue"

export default {
  name: "UsersDetails",
  components: {
    LayoutUsersDetails,
    NotesThread,
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
        {
          title: "Notes Thread",
          icon: "<far far fa-sticky-note mr-2 lg",
        },
      ],
    }
  },
  methods: {
    updateAddress() {
      this.$store.dispatch("updateAddress", {
        //   email: this.email,
        //   password: this.password,
        // })
        // .then(() => {
        //   this.$router.push({ name: "Users" })
        // })
        // .catch((err) => {
        //   console.log(err)
        //   this.incorrectAuth = true
      })
    },
    deleteAddress(id, index) {
      if (confirm("Delete Address?"))
        axios
          .delete("/api/artist/" + id)
          .then((resp) => {
            this.artists.data.splice(index, 1)
          })
          .catch((error) => {
            console.log(error)
          })
    },
  },
}
</script>
