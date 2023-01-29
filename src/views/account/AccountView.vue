<template>
  <LayoutAccount>
    <div class="main-content user-main">
      <div class="main-content-panel my-2">
        <div class="card mb-3">
          <div class="card-body tabs-wrapper">
            <div class="row">
              <div class="col-lg-3 col-md-12 col-sm-12 m-md-b m-sm-b m-xs-b">
                <!-- Tab Buttons -->
                <ul class="accordion-tabs">
                  <li
                    v-for="(tab, index) in tabs"
                    @click="currentTab = index"
                    :class="{ active: currentTab === index }"
                  >
                    <a
                      class="text-left btn btn-info w-100 m-1"
                      :title="tab.title"
                    >
                      <i :class="tab.icon"></i>{{ tab.title }}</a
                    >
                  </li>
                </ul>
                <!-- END Tab Buttons -->
              </div>
              <div class="col-lg-9 col-md-12 col-sm-12">
                <div class="tab-contents">
                  <!-- START Candidate Address !-->
                  <div
                    v-show="currentTab === 0"
                    class="tab-content"
                    id="candidate-addresses"
                  >
                    <div class="row button-row mb-3 p-1 pt-4 pt-lg-0">
                      <div class="col-lg-8 col-md-7 col-sm-12">
                        <h4 class="card-title text-brand">Addresses</h4>
                        <p class="card-text">
                          Addresses for John Doe in the system
                        </p>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-12 text-right">
                        <div class="button-area">
                          <a
                            href="#"
                            title="Edit John Doe's "
                            class="btn btn-brand"
                          >
                            <i class="far fa-plus icon left mr-2"></i>Edit
                            Address
                          </a>
                        </div>
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
                      <div class="col-lg-8 col-md-7 col-sm-12">
                        <h4 class="card-title text-brand">Contact Numbers</h4>
                        <p class="card-text">
                          Contact numbers for John Doe in the system
                        </p>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-12 text-right">
                        <div class="button-area">
                          <a
                            href="#"
                            title="Edit Contact Number"
                            class="btn btn-brand"
                          >
                            <i class="far fa-plus icon left mr-2"></i>Edit
                            Contact Number
                          </a>
                        </div>
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
                      <div class="col-lg-8 col-md-7 col-sm-12">
                        <h4 class="card-title text-brand">Email Addresses</h4>
                        <p class="card-text">
                          Email Addresses for John Doe in the system
                        </p>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-12 text-right">
                        <div class="button-area">
                          <a
                            href="#"
                            title="Edit John Doe's "
                            class="btn btn-brand"
                          >
                            <i class="far fa-plus icon left mr-2"></i>Edit Email
                            Address
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- END Candidate Email Addresses !-->
                  <!-- START Candidate General  !-->
                  <div
                    v-show="currentTab === 3"
                    class="tab-content active"
                    id="candidate-general-"
                  >
                    <div class="row button-row mb-3 p-1 pt-4 pt-lg-0">
                      <div class="col-lg-8 col-md-7 col-sm-12">
                        <h4 class="card-title text-brand">Recent Activity</h4>
                        <p class="card-text">
                          Recent Activity for John Doe in the system
                        </p>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-12 text-right">
                        <!-- <div class="button-area">
                          <a
                            href="#"
                            title="Edit "
                            class="btn btn-brand"
                          >
                            <i class="far fa-pencil icon left mr-2"></i>Edit 
                          </a>
                        </div> -->
                      </div>
                    </div>
                  </div>
                  <!-- END Candidate General  !-->
                  <!-- START Candidate Notes !-->
                  <div
                    v-show="currentTab === 4"
                    class="tab-content"
                    id="candidate-email-addresses"
                  >
                    <div class="row button-row mb-3 p-1 pt-4 pt-lg-0">
                      <div class="col-lg-8 col-md-7 col-sm-12">
                        <h4 class="card-title text-brand">Notes</h4>
                        <p class="card-text">
                          Notes for John Doe in the system
                        </p>
                      </div>
                      <div class="col-lg-4 col-md-5 col-sm-12 text-right">
                        <div class="button-area">
                          <a
                            href="#"
                            title="Edit John Doe's "
                            class="btn btn-brand"
                          >
                            <i class="far fa-plus icon left mr-2"></i>Edit Notes
                          </a>
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
