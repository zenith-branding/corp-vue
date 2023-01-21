<script setup>
import { RouterLink, RouterView } from "vue-router"
import Header from "./components/Header.vue"
import HeaderTop from "./components/HeaderTop.vue"
import HeaderBottom from "./components/HeaderBottom.vue";
import "bootstrap/dist/js/bootstrap.js"

</script>

<template>
  <!-- <Header ></Header> -->
  <header>
    <HeaderTop />
    <HeaderBottom />
  </header>

  <RouterView />
</template>
