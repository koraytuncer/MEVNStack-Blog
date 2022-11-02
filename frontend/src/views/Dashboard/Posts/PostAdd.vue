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
              :onSubmit="onSubmit"
              :post="post"
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
import { reactive, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
    Footer,
    PostForm,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const resultCat = ref();

    function onChangeSection(event) {
      const categories = computed(() => store.getters.getCategories);
      resultCat.value = categories.value.filter((c) => c.title == event.target.value);
    }


    const post = reactive({
      title: "",
      category:  "",
      description: "",
      author: "",
    });



    const onSubmit = async () => {
      post.category = resultCat.value[0]._id
      await store.dispatch("addPost", post);
      
      router.push({ name: 'dashboard'})
      
    };


    return {
      post,
      onSubmit,
      onChangeSection,
    };
  },
};
</script>

<style>
.ql-editor.ql-blank {
  height: 350px !important;
}

.ql-container.ql-snow {
  height: 350px !important;
}
</style>
