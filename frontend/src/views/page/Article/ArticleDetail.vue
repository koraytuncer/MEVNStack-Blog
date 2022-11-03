<template>
  <div class="container">
    <div class="articles-blog-post">
      <div class="row">
        <div class="col-xs-12 col-lg-12">
          <article class="articles">
            <div class="articles-header">
              <time>{{ dateTime(post.updatedAt) }}</time>
              <span class="articles-header-category" v-if="post.length != 0" :style="{ color: post.category.color }">
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
                  <a href="https://github.com/koraytuncer" class="social-icon" title="Github"><i class="fab fa-git"></i></a>
                  <a href="https://linkedin.com/koraytuncer" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <p class="font-primary articles-author-content-text">
                Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır.
              </p>
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
