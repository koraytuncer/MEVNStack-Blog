<template>
    <div class="page-wrapper">
      <Header title="Kategori Güncelle" button="Yazı Oluştur" toLink="newPost" buttonShow="false" />
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-deck row-cards">
            <div class="col-12">
              <div class="card">
              <div class="card-body">
                <form method="post" @submit.prevent="onSubmit">
                <div class="mb-3">
                  <label class="form-label">Başlık</label>
                  <input type="text" v-model="category.title" class="form-control" placeholder="Kategori Adı">
                </div>
                <div class="mb-3">
                  <label class="form-label">Kategori Renk</label>
                  <div class="mb-3">
                            <input type="color" v-model="category.color" class="form-control form-control-color" title="Choose your color">
                          </div>
                </div>
                <div class="mb-3">
                    <div class="col-6 col-sm-4 col-md-2 col-xl py-3 float-end">
                        <button class="btn btn-success w-100" type="submit">
                          Gönder
                        </button>
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
import { ref,onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute,useRouter } from "vue-router";
import { useToast } from "vue-toastification";
export default {
  components: {
    Header,
    Footer,
    QuillEditor
  },
  setup(){
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const toast = useToast();


    onMounted(() => {
      getCategory();
    });

    const category = ref({
      title: "",
      color:  "",
    });

    const getCategory = async () => {
      const { id } = route.params;
      const response = await fetch(
        process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + "getCategory/" + id
      );
      const json = await response.json();
      category.value = json.category;
    };


    const onSubmit = async () => {
      console.log(category)
      await store.dispatch("updateCategory", category);
      toast.success("Güncelleme İşlemi Başarılı");
      router.push({ name: "categoryLists" });
      
    };


    return{
      category,
      onSubmit
    }
  }
};
</script>

<style>
.ql-editor.ql-blank{
  height: 350px !important;
}
.ql-container.ql-snow{
  height: 350px !important;
}

</style>
