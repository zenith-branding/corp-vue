<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <ReportsNavbar />

  </div>
</template>

<script>
import HeaderBottom from "../../../components/HeaderBottom.vue"
import HeaderTop from "../../../components/HeaderTop.vue"
import ReportsNavbar from "./ReportsNavbar.vue"

export default {
  name: "LayoutReports",
  components: {
    HeaderTop,
    HeaderBottom,
    ReportsNavbar
  },
}
</script>