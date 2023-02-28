<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="content-area">
          <!-- Title Area !-->
          <h1 class="main-heading">Latests Invoices</h1>
          <p class="main-sub-heading pb-4">Latests Invoices in the system</p>
          <!-- END Title Area !-->
        </div>
      </div>
      <div
        class="col-sm-6 d-sm-flex justify-content-end align-items-center pb-xs-5 pb-4"
      >
        <!-- Dropdown Filter!-->
        <div class="table-filter">
          <router-link
            to="#"
            class="btn btn-secondary nav-link dropdown-toggle mr-3"
            id="dropdownMenuButton1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            @click="toggleFilter = !toggleFilter"
            title="Filter"
          >
            <i class="far fa-plus icon mr-2"></i>Filter
          </router-link>
          <InvoiceFilter :toggleFilter="toggleFilter"/>

        </div>
        <!-- END Dropdown Filter!-->

        <div class="button-area d-flex">
          <!-- Search Input Field !-->
          <input
            class="form-control mr-3"
            type="text"
            placeholder="Search Invoice"
            aria-label="Invoice Search"
          />
          <!-- END Search Input Field !-->
          <!-- Sort By Button !-->
          <select class="custom-select mr-3" id="inlineFormCustomSelect">
            <option selected>Sort By</option>
            <option value="1">Settled</option>
            <option value="2">Waiting Payment</option>
            <option value="3">Date</option>
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
    <div class="row">
      <IncomingInvoicesTable />
      <OutgoingInvoicesTable />
    </div>
  </div>
</template>

<script>
import { Bootstrap5Pagination } from "laravel-vue-pagination"
import HeaderBottom from "../../components/HeaderBottom.vue"
import HeaderTop from "../../components/HeaderTop.vue"
import IncomingInvoicesTable from "./components/IncomingInvoicesTable.vue"
import OutgoingInvoicesTable from "./components/OutgoingInvoicesTable.vue"
import InvoiceFilter from "./components/InvoiceFilter.vue"
import { mapState } from "vuex"
import { getAPI } from "../../utils/axios-api"

export default {
  name: "InvoicesView",

  data() {
    return {
      toggleFilter: false,
    }
  },

  components: {
    HeaderTop,
    HeaderBottom,
    IncomingInvoicesTable,
    OutgoingInvoicesTable,
    InvoiceFilter
  },
}
</script>
