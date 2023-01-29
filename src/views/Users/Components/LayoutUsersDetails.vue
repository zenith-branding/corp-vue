<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <!-- Page Header -->
    <div class="main-heading-wrapper">
      <div class="row">
        <div class="col-sm-6">
          <div class="content-area">
            <!-- Title Area !-->
            <h1 class="main-heading">User Details</h1>
            <p class="main-sub-heading">Full information about the user</p>
            <!-- END Title Area !-->
          </div>
        </div>
        <div
          class="col-sm-6 d-sm-flex justify-content-end align-items-center pb-xs-5"
        >
          <div class="button-area d-flex">
            <!-- Search Button Button !-->
            <a href="#" title="Add" class="btn btn-primary mr-3">
              <i class="far fa-search icon left mr-2"></i>Search
            </a>
            <!-- END Search Button Button !-->
            <!-- Search Input Field !-->
            <input
              class="form-control"
              type="text"
              placeholder="Search User"
              aria-label="User Search"
            />
            <!-- END Search Input Field !-->
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
  name: "LayoutUsersDetails",
  components: {
    HeaderTop,
    HeaderBottom,
    UsersSidebar,
  },
}
</script>
