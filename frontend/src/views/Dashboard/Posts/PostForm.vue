<template>
  <div class="card">
    <div class="card-body">
      <form method="post" @submit.prevent="onSubmit">
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
          <select v-model="form.category" @change="onChangeSection($event)" name="category" class="form-select">
            <option value="" disabled selected>Lütfen Seçiniz</option>
            <option v-for="(item, index) in categories" :key="index">
              {{ item.title }}
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
</template>
<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import {onMounted,computed} from "vue"
import { useStore } from "vuex";
export default {
  name: "Post-Form",
  components: {
    QuillEditor,
  },
  props: ["form", "onSubmit","onChangeSection"],
  setup(){
    const store = useStore();
    
    const categories = computed(() => store.getters.getCategories);
    onMounted(() => store.dispatch("initCategories"));



    return{
        categories,
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