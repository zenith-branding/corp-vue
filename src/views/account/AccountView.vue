<template>
  <LayoutAccount>
    <div class="main-content user-main">
      <div class="main-content-panel my-2">
        <div class="card mb-3">
          <div class="card-body tabs-wrapper p-4">
            <div class="row">
              <div class="col-12">
                <!-- Tab Buttons -->
                <ul class="accordion-tabs d-flex flex-column flex-lg-row mb-3">
                  <li
                    v-for="(tab, index) in tabs"
                    @click="currentTab = index"
                    :key="tab.title"
                    :class="{ active: currentTab === index }"
                    class="mr-2"
                  >
                    <a
                      class="text-left btn btn-info w-100 m-1 p-2"
                      :title="tab.title"
                    >
                      <i :class="tab.icon"></i>{{ tab.title }}</a
                    >
                  </li>
                </ul>
                <!-- END Tab Buttons -->
              </div>
              <div class="col-12">
                <div class="tab-contents">
                  <!-- START Personal Information !-->
                  <div v-show="currentTab === 0" class="tab-content">
                    <PersonalInformation />
                  </div>
                  <!-- END Personal Information !-->
                  <!-- START Candidate Contact Numbers !-->
                  <div
                    v-show="currentTab === 1"
                    class="tab-content"
                    id="candidate-contact-number"
                  >
                    <AccountSettings />
                  </div>
                  <!-- END Candidate Contact Numbers !-->

                  <!-- START Candidate General Details !-->
                  <div
                    v-show="currentTab === 2"
                    class="tab-content active"
                    id="candidate-general-details"
                  >
                    <div class="row button-row mb-3 p-1 pt-4">
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
                  <!-- START Candidate Notes !-->
                  <div
                    v-show="currentTab === 3"
                    class="tab-content notes-tab"
                    id="candidate-email-addresses"
                  >
                    <div class="row button-row mb-3 p-1 pt-4">
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
import PersonalInformation from "./Components/PersonalInformation.vue"
import AccountSettings from "./Components/AccountSettings.vue"

export default {
  name: "Account",
  components: {
    LayoutAccount,
    PersonalInformation,
    AccountSettings,
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          title: "Personal Information",
          icon: "far fa-map-marker-alt icon left mr-2 lg",
        },
        {
          title: "Account Settings",
          icon: "far fa-phone icon left mr-2 lg",
        },

        {
          title: "Activity History",
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
