<template>
    <HeaderTop />
    <HeaderBottom />
    <div class="container">
        <slot />
        <PayrollTable/>
    </div>
</template>

<script>
import HeaderBottom from "../../../components/HeaderBottom.vue";
import HeaderTop from "../../../components/HeaderTop.vue";
import PayrollTable from "./PayrollTable.vue";

export default {
  name: "LayoutPayroll",
  components: {
    HeaderTop,
    HeaderBottom,
    PayrollTable,
  },
}
</script>
