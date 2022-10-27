<template>
    <div class="page-wrapper">
      <Header title="Yeni Kategori" button="Yazı Oluştur" toLink="newPost" buttonShow="false" />
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-deck row-cards">
            <div class="col-12">
              <div class="card">
              <div class="card-body">
                <form method="post">
                <div class="mb-3">
                  <label class="form-label">Başlık</label>
                  <input type="text" class="form-control" placeholder="Kategori Adı">
                </div>
                <div class="mb-3">
                  <label class="form-label">Kategori Renk</label>
                  <div class="mb-3">
                            <input type="color" class="form-control form-control-color" value="#206bc4" title="Choose your color">
                          </div>
                </div>
                <div class="mb-3">
                    <div class="col-6 col-sm-4 col-md-2 col-xl py-3 float-end">
                        <a href="#" class="btn btn-success w-100">
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

export default {
  components: {
    Header,
    Footer,
    QuillEditor
  },
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
