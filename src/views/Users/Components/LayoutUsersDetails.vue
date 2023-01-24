<template>
    <HeaderTop />
    <HeaderBottom />
    <div class="container">
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
import HeaderTop from "./HeaderTop.vue"
import HeaderBottom from "./HeaderBottom.vue"
import UsersSidebar from "./UsersSidebar.vue";

export default {
  name: "LayoutUsersDetails",
  components: {
    HeaderTop,
    HeaderBottom,
    UsersSidebar
  },
}
</script>
