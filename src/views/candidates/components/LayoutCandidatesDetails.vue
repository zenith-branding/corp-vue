<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <CandidatesHeader />
    <SecondaryNavbar />

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
