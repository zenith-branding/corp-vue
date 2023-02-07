<template>
  <HeaderTop />
  <HeaderBottom />
  <div class="container">
    <UsersHeader />
    <div class="row sm-pt-3">
      <div class="col-lg-3 col-md-4 col-sm-12 m-xs-b">
        <UsersSidebar />
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
import UsersSidebar from "./UsersSidebar.vue"
import UsersHeader from "./UsersHeader.vue"

export default {
  name: "LayoutUsersDetails",
  components: {
    HeaderTop,
    HeaderBottom,
    UsersSidebar,
    UsersHeader
  },
}
</script>
