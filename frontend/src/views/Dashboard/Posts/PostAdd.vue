<template>
  <div>
    <div class="page-wrapper">
      <Header title="Yeni Blog Yazısı" button="Kategori Oluştur" toLink="newPost" buttonShow="false" />
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-deck row-cards">
            <div class="col-12">
              <div class="card">
              <div class="card-body">
                <div class="mb-3">
                  <label class="form-label">Başlık</label>
                  <input type="text" class="form-control" placeholder="Yazı Başlığı">
                </div>
                <div class="mb-3">
                  <label class="form-label">Kategori</label>
                  <select type="text" class="form-select" placeholder="Select a date" id="select-tags" value="">
                              <option value="HTML">HTML</option>
                              <option value="JavaScript">JavaScript</option>
                              <option value="CSS">CSS</option>
                              <option value="jQuery">jQuery</option>
                              <option value="Bootstrap">Bootstrap</option>
                              <option value="Ruby">Ruby</option>
                              <option value="Python">Python</option>
                            </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Yazar</label>
                  <input type="text" class="form-control" placeholder="Koray Tuncer" readonly>
                </div>
                <div class="mb-3">
                  <label class="form-label">Yazı Alanı</label>
                  <form method="post">
                    <QuillEditor theme="snow" />
                    <div class="col-6 col-sm-4 col-md-2 col-xl py-3 float-end">
                        <a href="#" class="btn btn-success w-100">
                          Gönder
                        </a>
                      </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
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
