<template>
  <!-- SecondaryNavbar-->
  <div class="row secondary-navbar">
    <nav class="col-sm-12">
      <!-- Tab Buttons -->
      <div class="row">
      <div class="col-3">
        <div class="content-area">
          <!-- Title Area !-->
          <h1 class="main-heading">Reports</h1>
          <p class="main-sub-heading">All reports can be found here</p>
          <!-- END Title Area !-->
        </div>
      </div>
      <div class="col-9">
        <ul class="accordion-tabs d-flex flex-row justify-content-end mb-3">
          <li
            v-for="(tab, index) in tabs"
            @click="currentTab = index"
            :key="tab.title"
            :class="{ active: currentTab === index }"
            class="ml-2"
          >
            <a
              class="text-left btn btn-secondary w-100 m-1 p-3"
              :title="tab.title"
            >
              <i :class="tab.icon"></i>{{ tab.title }}</a
            >
          </li>
        </ul>
      </div>
      </div>
      <!-- 
       -->
      <div class="row sm-pt-3">
        <div class="col-sm-12 pr-2">
          <div class="pr-2">
            <div class="tab-contents">
              <!-- START Personal Information !-->
              <div v-show="currentTab === 0" class="tab-content">
                
                <PayrollTab />
              </div>
              <!-- END Personal Information !-->
              <!-- START my account Contact Numbers !-->
              <div
                v-show="currentTab === 1"
                class="tab-content"
                id="my account-contact-number"
              >
              <PayBillTab />
                
              </div>
              <!-- END my account Contact Numbers !-->

              <!-- START my account General Details !-->
              <div
                v-show="currentTab === 2"
                class="tab-content active"
                id="my account-general-details"
              >
                
              <!-- <PayrollTab /> -->
              </div>
              <!-- END my account General Details !-->
            </div>
          </div>
        </div>

        <!--  -->
      </div>
      <!-- END Tab Buttons -->
    </nav>
  </div>
  <!-- END SecondaryNavbar-->
</template>

<script>
import PayBillTab from "./PayBillTab.vue"
import PayrollTab from "./PayrollTab.vue"


export default {
  name: "ReportsNavbar",
  components: { PayBillTab, PayrollTab },
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          title: "Payrol",
          icon: "far fa-hospital icon left mr-2 lg",
        },
        {
          title: "Pay & Bill",
          icon: "far fa-cog icon left mr-2 lg",
        },
        {
          title: "Invoices",
          icon: "far fa-clock icon left mr-2 lg",
        },
      ],
    }
  },
}
</script>
