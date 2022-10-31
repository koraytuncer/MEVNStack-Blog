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
            <div class="card">
              <div class="card-body">
                <form method="post">
                  <div class="mb-3">
                    <label class="form-label">Başlık</label>
                    <input
                      v-model="form.title"
                      type="text"
                      class="form-control"
                      placeholder="Yazı Başlığı"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Kategori</label>
                    <select v-model="form.category" name="category" class="form-select">
                      <option value="Lütfen Seçiniz" selected>Lütfen Seçiniz</option>
                      <option v-for="(item, index) in categories" :key="index">
                        {{ item._id }}
                      </option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Yazar</label>
                    <input
                      type="text"
                      name="author"
                      v-model="form.author"
                      class="form-control"
                      placeholder="Yazar Adı"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Yazı Alanı</label>
                    <QuillEditor
                      v-model:content="form.description"
                      contentType="html"
                      theme="snow"
                    ></QuillEditor>

                    <div class="col-6 col-sm-4 col-md-2 col-xl py-3 float-end">
                      <button type="submit" class="btn btn-success w-100">Gönder</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { computed, onMounted, reactive,watchEffect } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  components: {
    Header,
    Footer,
    QuillEditor,
  },
  props: ["slug"],
  setup(props) {
    const store = useStore();
    const route = useRoute();

    const categories = computed(() => store.getters.getCategories);
    onMounted(() => store.dispatch("initCategories"));

    const post = computed(() => store.getters.getPost);
    onMounted(() => {
  if(store.state.post.length === 0){
        store.dispatch("initPost", props.slug)
        
      }
    });

    

    let form = reactive({
      title: post.value.title,
      description: post.value.description,
      author: post.value.author,
      category:post.value.category
    });


    return {
      categories,
      form,      
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
