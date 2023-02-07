<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <div class="row">
      <div class="col-12">
        <IncomingInvoicesTemplate />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from "../../components/HeaderBottom.vue"
import HeaderTop from "../../components/HeaderTop.vue"
import IncomingInvoicesTemplate from "./components/IncomingInvoicesTemplate.vue"

export default {
  name: "IncomingInvoicesDetailsView",

  components: {
    HeaderTop,
    HeaderBottom,
    IncomingInvoicesTemplate,
  },
}
</script>
