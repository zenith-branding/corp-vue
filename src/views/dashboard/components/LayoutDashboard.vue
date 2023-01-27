<template>
    <HeaderTop />
    <HeaderBottom />
    <div class="container">
        <slot />
        <!-- <DashboardTable/> -->
    </div>
</template>

<script>
import HeaderBottom from "../../../components/HeaderBottom.vue";
import HeaderTop from "../../../components/HeaderTop.vue";
import DashboardTable from "./DashboardTable.vue";

export default {
  name: "LayoutDashboard",
  components: {
    HeaderTop,
    HeaderBottom,
    DashboardTable,
  },
}
</script>
