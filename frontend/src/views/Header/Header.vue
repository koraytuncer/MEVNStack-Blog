<template>
  <header>
    <div class="container">
      <div class="header-top d-flex justify-content-between align-items-center">
        <div class="header-top-logo">
          <router-link to="/" title="Home">
            <img width="70" src="@/assets/img/logo.png" alt="K91 Blog" />
          </router-link>
        </div>
        <!-- <div class="header-top-text d-none d-lg-block">
                    <p class="font-secondary">
                        <span class="fst-italic">“Modern Javascript”</span>
                    </p>
                </div>
        <div class="d-flex align-items-center d-lg-block position-relative">
          <div class="header-top-search">
            <div class="header-top-search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <form id="search-form" action="#" method="get">
              <input type="text" class="form-control" placeholder="Ara" />
              <button class="btn" type="submit"><i class="pe-7s-search"></i></button>
            </form>
          </div>
          <a href="#" class="light-link d-block d-lg-none" title="Menu">
            <div id="menu-animate-icon" class="header-top-nav-menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div> -->
      </div>
      <nav class="header-nav d-none d-lg-block">
        <ul class="d-block d-lg-flex">
          <li :class="{ active: selected === 0 }" @click="changeSelected(0)">
            <router-link to="/" title="Home">Ana Sayfa</router-link>
          </li>

          <li class="dropdown" :class="{ active: selected === 1 }" @click="changeSelected(1)">
            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" title="Blog articles">Kategoriler</a>
            <ul class="dropdown-menu">
              <li v-for="(category, index) in categories" :key="index">
                <router-link
                  :to="{ name: 'categoryList', params: { id: category.slug } }"
                  class="d-flex justify-content-between"
                  :style="{ color: '#' + category.color }"
                  :title="category.title"
                >
                  {{ category.title }}
                  <i class="fa-solid fa-star"></i>
                </router-link>
              </li>
            </ul>
          </li>
          <li :class="{ active: selected === 2 }" @click="changeSelected(2)">
            <router-link to="/about" title="Hakkımda">Hakkımda</router-link>
          </li>
          <li :class="{ active: selected === 3 }" @click="changeSelected(3)">
            <router-link to="/project" title="Projeleriö">Projelerim</router-link>
          </li>
          <li :class="{ active: selected === 4 }" @click="changeSelected(4)">
            <router-link to="/contact" title="İletişim">İletişim</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Navigasyon from "@/components/Navigasyon.vue";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Header",
  components: { Navigasyon },
  setup() {
    const store = useStore();
    const categories = computed(() => store.getters.getCategories);

    onMounted(() => store.dispatch("initCategories"));


    const selected = ref(0);
    const changeSelected = (i) => {
      selected.value = i;
    };

    return { categories, selected, changeSelected };
  },
};
</script>
