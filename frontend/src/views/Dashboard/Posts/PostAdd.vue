<template>
  <div class="page-wrapper">
    <Header title="Yeni Blog Yazısı" button="Kategori Oluştur" toLink="newCategory" buttonShow="false" />
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <form method="post" @submit.prevent="handleSubmit">
                  <div class="mb-3">
                    <label class="form-label">Başlık</label>
                    <input name="title" v-model="form.title" type="text" class="form-control"
                      placeholder="Yazı Başlığı">
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Kategori</label>
                    <select v-model="form.category" name="category" class="form-select">
                      <option value="Lütfen Seçiniz" selected>Lütfen Seçiniz</option>
                      <option v-for="(item, index) in categories" :key="index">{{ item.title }}</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Yazar</label>
                    <input type="text" name="author" v-model="form.author" class="form-control" placeholder="Yazar Adı">
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Yazı Alanı</label>
                    <QuillEditor v-model:content="form.post" contentType="html" theme="snow"></QuillEditor>

                    <div class="col-6 col-sm-4 col-md-2 col-xl py-3 float-end">
                      <a href="#" class="btn btn-success w-100" @click="handleSubmit">
                        Gönder
                      </a>
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
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Header,
    Footer,
    QuillEditor
  },
  setup() {
    const store = useStore();
    const categories = computed(() => store.getters.getCategories);
    onMounted(() => store.dispatch("initCategories"));

    const form = {
      title: "",
      category: "",
      post: "",
      author: "",
    }

    console.log(form)

    const handleSubmit = () => {
      console.log("Gönderildi")
    }

    return {
      categories,
      form,
      handleSubmit
    }
  }
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
