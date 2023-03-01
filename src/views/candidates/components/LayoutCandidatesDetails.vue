<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <CandidatesHeader />
    <SecondaryNavbar />
    <div class="row sm-pt-3">
      <div class="col-lg-3 col-md-4 col-sm-12 m-xs-b">
        <CandidatesSidebar />
      </div>
      <div class="col-lg-9 col-md-8 col-sm-12">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from "../../../components/HeaderBottom.vue"
import HeaderTop from "../../../components/HeaderTop.vue"
import CandidatesSidebar from "./CandidatesSidebar.vue"
import CandidatesHeader from "./CandidatesHeader.vue"
import SecondaryNavbar from "./SecondaryNavbar.vue"

export default {
  name: "LayoutCandidatesDetails",
  components: {
    HeaderTop,
    HeaderBottom,
    CandidatesSidebar,
    CandidatesHeader,
    SecondaryNavbar
  },
}
</script>
