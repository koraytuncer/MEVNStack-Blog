<template>
    <div class="page-wrapper">
      <Header title="Yeni Kategori" button="Yazı Oluştur" toLink="newPost" buttonShow="false" />
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
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
    Footer
  },
  setup(){
    const store = useStore();
    const router = useRouter();

    const category = reactive({
      title: "",
      color:  "",
    });

    const onSubmit = async () => {
      await store.dispatch("addCategory", category);
      
    };


    return{
      category,
      onSubmit
    }
  }
};
</script>