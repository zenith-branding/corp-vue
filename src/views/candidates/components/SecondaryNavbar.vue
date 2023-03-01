<template>
  <!-- SecondaryNavbar-->
  <div class="row secondary-navbar">
    <nav class="col-sm-12">
      <!-- Tab Buttons -->
      <ul class="accordion-tabs d-flex flex-column flex-lg-row mb-3">
        <li
          v-for="(tab, index) in tabs"
          @click="currentTab = index"
          :key="tab.title"
          :class="{ active: currentTab === index }"
          class="mr-2"
        >
          <a class="text-left btn btn-info w-100 m-1 p-3" :title="tab.title">
            <i :class="tab.icon"></i>{{ tab.title }}</a
          >
        </li>
      </ul>
      <div class="col-12">
        <div class="tab-contents">
          <!-- START Personal Information !-->
          <div v-show="currentTab === 0" class="tab-content">
            <PersonalInformation />
          </div>
          <!-- END Personal Information !-->
          <!-- START my account Contact Numbers !-->
          <div
            v-show="currentTab === 1"
            class="tab-content"
            id="my account-contact-number"
          >
            <AccountSettings />
          </div>
          <!-- END my account Contact Numbers !-->

          <!-- START my account General Details !-->
          <div
            v-show="currentTab === 2"
            class="tab-content active"
            id="my account-general-details"
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
          <!-- END my account General Details !-->
          <!-- START my account Notes !-->
          <div
            v-show="currentTab === 3"
            class="tab-content notes-tab"
            id="my account-email-addresses"
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
                        <td>Medical Locums Note</td>
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
          <!-- END my account Notes !-->
        </div>
      </div>
      <!-- END Tab Buttons -->
      <!-- <ul class="navigation">
        <li>
          <a
            href="#/candidates/view"
            aria-current="page"
            class="router-link-exact-active router-link-active"
            title="Company Details"
            ><i class="far fa-cog icon left lg mr-2"></i> Details
          </a>
        </li>
        <li>
          <a href="#/candidates/view/locations" class="" title="Locations"
            ><i class="far fa-map-marker-alt icon left lg mr-2"></i>Locations
          </a>
        </li>
        <li>
          <a href="#/candidates/view/clients" class="" title="Clients"
            ><i class="far fa-hospital icon left lg mr-2"></i>Clients
          </a>
        </li>
        <li>
          <a href="#/candidates/view/shifts" class="" title="Shifts"
            ><i class="far fa-clock icon left lg mr-2"></i>Shifts
          </a>
        </li>
        <li>
          <a href="#/candidates/view/payslips" class="" title="Payslips"
            ><i class="far fa-money-check icon left lg mr-2"></i>Payslips
          </a>
        </li>
        <li>
          <a href="#/candidates/view/invoices" class="" title="Invoices"
            ><i class="far fa-file-invoice-dollar icon left lg mr-2"></i>Invoices
          </a>
        </li>
        <li>
          <a href="#/candidates/view/notes" class="" title="Notes"
            ><i class="far fa-pencil icon left lg mr-2"></i>Notes
          </a>
        </li>
      </ul> -->
    </nav>
  </div>
  <!-- END SecondaryNavbar-->
</template>

<script>
export default {
  name: "SecondaryNavbar",
  components: {},
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          title: "Details",
          icon: "far fa-cog icon left mr-2 lg",
        },
        {
          title: "Clients",
          icon: "far fa-hospital icon left mr-2 lg",
        },
        {
          title: "Timesheets",
          icon: "far fa-clock icon left mr-2 lg",
        },
        // {
        //   title: "Activity",
        //   icon: "far fa-user icon left mr-2 lg",
        // },
        // {
        //   title: "Notes",
        //   icon: "<far far fa-sticky-note mr-2 lg",
        // },
        // {
        //   title: "Notes Thread",
        //   icon: "<far far fa-sticky-note mr-2 lg",
        // },
      ],
    }
  },
}
</script>
