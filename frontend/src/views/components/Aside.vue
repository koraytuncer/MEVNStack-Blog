<template>
          <div class="aside-blocks col-lg-4 col-xs-12">
          <section class="author">
            <img src="@/assets/img/koray.png" alt="Profile picture" width="100" height="100" />
            <h2>Koray Tuncer</h2>
            <span class="author-info">Front-End Developer</span>
            <span class="author-info">K91 Trusted Solution </span>
            <div class="author-social d-flex align-items-center justify-content-center">
              <a href="#" class="social-icon" title="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="https://github.com/koraytuncer" class="social-icon" title="Github"><i class="fab fa-git"></i></a>
              <a href="https://www.linkedin.com/in/koraytuncer/" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <ul class="author-nav">
              <li>
                <a class="d-flex align-items-center" href="#" title=""><i class="fa-solid fa-lightbulb"></i>Proje fikrim var !</a>
              </li>
            </ul>
          </section>
          <section class="categories">
            <h2 class="aside-blocks-title">Kategoriler</h2>
            <ul>
              <li v-for="(category,index) in categories" :key="index">
                
                <router-link :to="{ name: 'categoryList', params: { id: category._id }}" class="d-flex justify-content-between" :style="{ color: '#' + category.color }" :title="category.title">
                  {{category.title}}
                  <i class="fa-solid fa-star"></i>
                </router-link>
            </li>
            </ul>
          </section>
          <section class="advertisement">
            <a href="#">
              <img src="@/assets/img/advertisement.jpg" alt="Advertisement" />
            </a>
          </section>
          <!-- <section class="tags">
            <h2 class="aside-blocks-title">Tags</h2>
            <ul class="tags-content">
              <li class="badge rounded-pill"><a href="#">graphic</a></li>
              <li class="badge rounded-pill"><a href="#">angular2</a></li>
              <li class="badge rounded-pill"><a href="#">graphic</a></li>
              <li class="badge rounded-pill"><a href="#">react</a></li>
              <li class="badge rounded-pill"><a href="#">it</a></li>
              <li class="badge rounded-pill"><a href="#">science</a></li>
            </ul>
          </section> -->
        </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Aside",
  setup() {
    const store = useStore();
    const categories = computed(() => store.getters.getCategories);
    const postFetch = onMounted(() => store.dispatch("initCategories"));


    return { postFetch, categories };
  },
};
</script>
