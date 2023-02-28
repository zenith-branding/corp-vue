<template>
  <div class="dropdown-wrapper">
    <ul
      class="dropdown-menu"
      v-bind:class="{ 'd-flex': toggleFilter, 'd-none': !toggleFilter }"
      aria-labelledby="dropdownMenuButton1"
    >
      <!-- <h3 class="main-heading">Quick Filters</h3> -->
      <li>
        <div class="filter-option">
          <p class="sub-heading">Start Date</p>
        </div>
        <div>
          <Datepicker
            v-model="date"
            class="my-4"
            placeholder="12/10/2022"
            :enable-time-picker="false"
          ></Datepicker>
        </div>
        <div class="filter-option">
          <p class="sub-heading">End Date</p>
        </div>
        <div>
          <Datepicker
            v-model="date"
            class="my-4"
            placeholder="12/10/2022"
            :enable-time-picker="false"
          ></Datepicker>
        </div>
      </li>
      <li>
        <div class="filter-option">
          <p class="sub-heading">Amount From</p>
        </div>
        <div>
          <input
            class="form-control mr-3 my-4"
            type="text"
            placeholder="£0"
            aria-label="Invoice Search"
          />
        </div>
        <div class="filter-option">
          <p class="sub-heading">Amount To</p>
        </div>
        <div>
          <input
            class="form-control mr-3 my-4"
            type="text"
            placeholder="£0"
            aria-label="Invoice Search"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker"
import "@vuepic/vue-datepicker/dist/main.css"
export default {
  name: "InvoiceFilter",
  props: ["toggleFilter"],
  components: {
    Datepicker,
  },
  data() {
    return {
      date: null,
    }
  },
}
</script>
