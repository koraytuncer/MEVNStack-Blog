<template>
  <div class="container">
    <div class="articles-blog-post">
      <div class="row">
        <div class="col-xs-12 col-lg-10">
          <article class="articles">
            <div class="articles-header">
              <time>{{ dateTime(post.updatedAt) }}</time>
              <span class="articles-header-category" v-if="post.length != 0" :style="{ color: '#' + post.category.color }">
                <i class="fa-solid fa-star"></i>
                {{ post.category.title }} </span>
            </div>
            <div class="articles-content px-8">
              <h1 class="articles-blog-post-tile fw-900">
                <a href="#" title="Keeping Your Business And Clients Safe With Digital Policies"> {{post.title}} </a>
              </h1>
              
              <p class="articles-blog-post-text font-secondary" v-html="post.description">
                
              </p>

            </div>
          </article>
        </div>
        <div class="col-xs-12 col-lg-2">
          <div class="side-section">
            <h3 class="side-section-title">Share this</h3>
            <ul>
              <li>
                <a class="text-13px" href="#" title="Facebook"> <i class="fab fa-facebook-f w-3 mr-2.5"></i>Facebook </a>
              </li>
              <li>
                <a class="text-13px" href="#" title="Twitter"> <i class="fab fa-twitter w-3 mr-2.5"></i>Twitter </a>
              </li>
              <li>
                <a class="text-13px" href="#" title="Google+"> <i class="fab fa-google-plus-g w-3 mr-2.5"></i>Google+ </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section class="blog-post-bottom-section">
      <div>
        <div class="articles-info col-xs-12 col-lg-12">
          <div class="articles-author d-flex">
            <img class="articles-author-img" src="@/assets/img/koray.png" alt="Profile picture" />
            <div class="articles-author-content">
              <div class="articles-author-header d-flex justify-content-between align-items-md-center flex-column flex-md-row">
                <h4 class="">{{post.author}}</h4>
                <div class="author-social d-flex align-items-center">
                  <a href="#" class="social-icon" title="Twitter"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="social-icon" title="Github"><i class="fab fa-git"></i></a>
                  <a href="#" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <p class="font-primary articles-author-content-text">
                Compassionate entrepreneur on a mission to end homelessness. #jshomes Javascript, tech education, electronic music, photography, film, viral
                apps.
              </p>
            </div>
          </div>
        </div>
        <div class="last-read">
          <h2 class="blog-post-bottom-section-title">Last Reads</h2>
          <div class="article-banner">
            <div class="row">
              <div class="col-xs-12 col-md-6 col-lg-4">
                <div class="article-banner-wrapper">
                  <a class="group" href="#" title="Angular 2 versus React: There Will Be Blood">
                    <div class="article-banner-content">
                      <h2>Angular 2 versus React: There Will Be Blood</h2>
                      <span class="category-tag category-tag-yellow">Javascript</span>
                      <time datetime="2022-03-01" class="article-banner-time">March 1, 2022</time>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4">
                <div class="article-banner-wrapper">
                  <a class="group" href="#" title="The End of Global CSS">
                    <div class="article-banner-content">
                      <h2>The End of Global CSS</h2>
                      <span class="category-tag category-tag-green">Graphic</span>
                      <time datetime="2022-03-01" class="article-banner-time">March 13, 2022</time>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-4">
                <div class="article-banner-wrapper">
                  <a class="group" href="#" title="Building an CSS Framework">
                    <div class="article-banner-content">
                      <h2>Building an CSS Framework</h2>
                      <span class="category-tag category-tag-blue">CSS</span>
                      <time datetime="2022-03-01" class="article-banner-time">March 24, 2022</time>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import moment from "moment";
export default {
  name: "Article-Detail",
  setup(props) {
    const store = useStore();
    const route = useRoute();


    const post = computed(() => store.getters.getPost);
    onMounted(() => store.dispatch("initPost", route.params.slug));


    const dateTime = (value) => {
      return moment(value).format("DD/MM/YYYY");
    };

    return { dateTime,post };
  },
};
</script>
