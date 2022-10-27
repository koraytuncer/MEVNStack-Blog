<template>
  <div class="page">
    <Aside />
    <router-view></router-view>
  </div>
</template>

<script>
import Aside from "../Dashboard/Aside.vue";
import "@/assets/dashboard/dist/js/tabler.min.js?1666304673";
export default {
  name: "Dashboard-Layout",
  components: { Aside },
};
</script>

<style>
@import "@/assets/dashboard/dist/css/tabler.min.css?1666304673";
@import "@/assets/dashboard/dist/css/demo.min.css?1666304673";
</style>
