<template>
<div>
  <Header />
  <router-view />
  <Footer />
</div>
</template>

<script>
import Header from "@/views/Header/Header.vue";
import Footer from "@/views/Footer/Footer.vue";
export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
};
</script>
