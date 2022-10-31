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
            <PostForm :form="form" />
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
import { onMounted,ref} from "vue";
import { useStore } from "vuex";
import { useRoute,useRouter } from "vue-router";
export default {
  components: {
    Header,
    Footer,
    PostForm
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();

    onMounted(() => getPost());

    const form = ref({
      title: "",
      description: "",
      author: "",
      category:{}
    });


    async function getPost(){
      const {slug} = route.params
       const response = await fetch(process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + slug )
       const json = await response.json()
       form.value = json.post
    }

    return {
      form,      
    };
  },
};
</script>
