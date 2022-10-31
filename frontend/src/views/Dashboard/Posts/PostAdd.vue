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
              :form="form"
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
import { reactive } from "vue";
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

    const form = reactive({
      title: "",
      category: "",
      description: "",
      author: "",
    });

    function onChangeSection(event) {
      alert(event.target.value);
    }

    const onSubmit = async () => {
      await store.dispatch("addPost", form);
    };

    return {
      form,
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
