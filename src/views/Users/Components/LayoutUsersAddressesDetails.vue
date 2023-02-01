<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
 <!-- Page Header -->
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-12">
          <div class="content-area text-center">
            <!-- Title Area !-->
            <h1 class="main-heading pt-3">Address Details</h1>
            <p class="main-sub-heading pb-4">Edit or delete address</p>
            <!-- END Title Area !-->
          </div>
        </div>
      </div>
    </div>
    <!-- END Page Header -->

    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-4 m-xs-b">
        <UsersSidebar />
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
import UsersSidebar from "./UsersSidebar.vue"


export default {
  name: "LayoutUsersAddressesDetails",
  components: {
    HeaderTop,
    HeaderBottom,
    UsersSidebar,
  },
}
</script>
