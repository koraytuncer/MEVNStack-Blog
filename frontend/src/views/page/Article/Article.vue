<template>
  <section class="articles" v-if="posts.length > 0">
    <article v-for="(post, index) in posts" :key="index">
      <div class="articles-header">
        <div class="d-flex justify-content-between">
          <h2>
            <router-link :to="{ name: 'articleDetail', params: { id: post._id, slug: post.slug } }" :title="post.title">{{ post.title }} </router-link>
          </h2>
          <div :style="{ color: '#' + post.category.color }">
            <i class="fa-solid fa-star"></i>
            {{ post.category.title }}
          </div>
        </div>
      </div>
      <div class="articles-content">
        <p class="font-secondary articles-content-text">{{ post.description.slice(0, 508) }},</p>
      </div>
      <div class="articles-footer d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row-reverse">
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
    </article>
    <Navigasyon />
  </section>
  <div v-else>
    <div class="alert alert-warning" role="alert">
      <h4 class="alert-heading">İçerik Bulunmamaktadır</h4>
      <p>Üzgünüm henüz yazı yazılmamış veya bir sorun var.</p>
    </div>
  </div>
</template>

<script>
import Navigasyon from "@/components/Navigasyon.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import moment from "moment";
export default {
  name: "Main",
  components: { Navigasyon },
  setup() {
    const store = useStore();
    const posts = computed(() => store.getters.getPosts);
    onMounted(() => store.dispatch("initPosts"));

    const dateTime = (value) => {
      return moment(value).format("DD/MM/YYYY");
    };

    return { posts, dateTime };
  },
};
</script>
