<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <div class="row">
        <div class="col-12">

            <h1 class="text-center pb-2">Latests Invoices</h1>
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
