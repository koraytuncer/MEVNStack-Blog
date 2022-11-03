<template>
  <div class="page-wrapper">
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">

          <div class="col-12">
            <PostList />
          </div>
          <div class="col-12">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/views/Dashboard/Footer";
import PostList from "@/views/Dashboard/Posts/PostList.vue";
import CategoryList from "@/views/Dashboard/Category/CategoryList.vue";


export default {
  name: "Dashboard-Home",
  components: {
    Footer,
    PostList,
    CategoryList
  },
};
</script>

<style></style>
