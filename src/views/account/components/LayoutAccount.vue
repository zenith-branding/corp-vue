<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <!-- Page Header -->
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-12">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading text-center">My Account</h1>
            <p class="main-sub-heading text-center">Update your details here</p>
            <!-- END Title Area !-->
          </div>
        </div>
      </div>
    </div>
    <!-- END Page Header -->
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-4 m-xs-b">
        <AccountSidebar />
      </div>
      <div class="col-lg-9 col-md-8 col-sm-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBottom from "../../../components/HeaderBottom.vue"
import HeaderTop from "../../../components/HeaderTop.vue"
import AccountSidebar from "./AccountSidebar.vue"

export default {
  name: "LayoutAccountDetails",
  components: {
    HeaderTop,
    HeaderBottom,
    AccountSidebar,
  },
}
</script>
