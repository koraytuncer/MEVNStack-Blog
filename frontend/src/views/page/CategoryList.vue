<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-xs-12">
          <section class="articles">
            <article v-for="(post, index) in posts" :key="index" class="my-0">
              <div v-if="categoryId == post.category.slug">
                <div class="articles-header">
                  <div class="d-flex justify-content-between">
                    <h2>
                      <router-link :to="{ name: 'articleDetail', params: { id: post._id, slug: post.slug } }" :title="post.title"
                        >{{ post.title }}
                      </router-link>
                    </h2>
                    <div :style="{ color: post.category.color }">
                      <i class="fa-solid fa-star"></i>
                      {{ post.category.title }}
                    </div>
                  </div>
                </div>
                <div class="articles-content">
                  <p class="font-secondary articles-content-text" v-html="post.description"></p>
                </div>
                <div class="articles-footer d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row-reverse mb-4">
                  <ul class="articles-footer-info d-flex align-items-center">
                    <li>
                      <i class="fa-solid fa-calendar-days"></i>
                      <time datetime="2022-10-11" class="gray">{{ dateTime(post.updatedAt) }}</time>
                    </li>
                    <li>
                      <router-link :to="{ name: 'articleDetail', params: { id: post._id, slug: post.slug } }" class="btn">Devamını Oku</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <!-- <Navigasyon /> -->
          </section>
        </div>
        <Aside />
      </div>
    </div>
  </main>
</template>

<script>
// import Navigasyon from "@/components/Navigasyon.vue";
import Aside from "@/views/components/Aside.vue";
import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import moment from "moment";
export default {
  name: "Main",
  components: {  Aside },
  setup() {
    const store = useStore();
    const route = useRoute();
    const categoryId = ref("");
    const posts = computed(() => store.getters.getPosts);
    onMounted(() => store.dispatch("initPosts"));


    watch(() => {
      categoryId.value = route.params.id;
    });


    const dateTime = (value) => {
      return moment(value).format("DD/MM/YYYY");
    };

    return { posts, dateTime, categoryId };
  },
};
</script>
