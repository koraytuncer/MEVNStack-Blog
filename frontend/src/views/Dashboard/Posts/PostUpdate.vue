<template>
  <div class="page-wrapper">
    <Header
      title="Yeni Blog Yazısı"
      button="Kategori Oluştur"
      toLink="newCategory"
      buttonShow="false"
    />
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <PostForm
              :post="post"
              :onSubmit="onSubmit"
              :onChangeSection="onChangeSection"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/views/Dashboard/Header";
import Footer from "@/views/Dashboard/Footer";
import PostForm from "@/views/Dashboard/Posts/PostForm";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  components: {
    Header,
    Footer,
    PostForm,
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const resultCat = ref();

    onMounted(() => {
      getPost();
    });

    const categories = computed(() => store.getters.getCategories);
    

    function onChangeSection(event) {
      resultCat.value = categories.value.filter((c) => c.title == event.target.value);
    }

    const post = ref({
      title: "",
      description: "",
      author: "",
      category: "",
    });

    const getPost = async () => {
      const { slug } = route.params;
      const response = await fetch(
        process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + slug
      );
      const json = await response.json();
      post.value = json.post;
      // form.value.title = json.post.title
      //post.value.description = json.post.description
      // form.value.author = json.post.author
      post.value.category = json.post.category.title;

      return json.post.category.title;
    };

    const onSubmit = async () => {
      if (post.value.category) {
        resultCat.value = categories.value.filter((c) => c.title == post.value.category);
      }

      if (resultCat.value) {
        post.value.category = resultCat.value[0]._id;
      }

      await store.dispatch("updatePost", post);

      router.push({ name: "dashboard" });
    };

    return {
      post,
      onChangeSection,
      onSubmit,
    };
  },
};
</script>
