<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-xs-12">
          <Article />
        </div>
        <Aside />
      </div>
    </div>
  </main>
</template>

<script>
import Aside from "@/views/components/Aside.vue";
import Article from "@/views/page/Article/Article.vue";
export default {
  name: "Main",
  components: { Aside, Article },
};

</script>
