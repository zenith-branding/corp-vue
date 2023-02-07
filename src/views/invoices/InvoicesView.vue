<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">Latests Invoices</h1>
            <p class="main-sub-heading pb-4">
              Latests Invoices in the system
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
              placeholder="Search Invoice"
              aria-label="Invoice Search"
            />
            <!-- END Search Input Field !-->
            <!-- Sort By Button !-->
            <select class="custom-select mr-3" id="inlineFormCustomSelect">
              <option selected>Sort By</option>
              <option value="1">Date</option>
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
import { mapState } from "vuex"
import { getAPI } from "../../utils/axios-api"

export default {
  name: "InvoicesView",

  components: {
    HeaderTop,
    HeaderBottom,
    IncomingInvoicesTable,
    OutgoingInvoicesTable,
  },
}
</script>
