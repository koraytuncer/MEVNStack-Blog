<template>
  <div class="page-wrapper">
    <Header title="Ayarlar" button="Yazı Oluştur" toLink="newPost" buttonShow="false" />
    <div class="page-body">
      <div class="container-xl">
        <div class="row row-deck row-cards">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <form method="post" @submit.prevent="onSubmit">
                  <div class="mb-3">
                    <label class="form-label">Ad Soyad</label>
                    <input
                      type="text"
                      v-model="setting.name"
                      class="form-control"
                      placeholder="Ad Soyad"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Ünvan</label>
                    <input
                      type="text"
                      v-model="setting.job"
                      class="form-control"
                      placeholder="Ünvan"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Sosyal Medya</label>
                    <div class="input-group mb-2">
                      <span class="input-group-text"> twitter.com/</span>
                      <input
                        type="text"
                        class="form-control"
                        v-model="setting.socialMedia.twitter"
                        placeholder="Kullanıcı Adı"
                        autocomplete="off"
                      />
                    </div>
                    <div class="input-group mb-2">
                      <span class="input-group-text"> github.com/</span>
                      <input
                        type="text"
                        class="form-control"
                        v-model="setting.socialMedia.github"
                        placeholder="Kullanıcı Adı"
                        autocomplete="off"
                      />
                    </div>
                    <div class="input-group mb-2">
                      <span class="input-group-text">linkedin.com/</span>
                      <input
                        type="text"
                        class="form-control"
                        v-model="setting.socialMedia.linkedin"
                        placeholder="Kullanıcı Adı"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="col-6 col-sm-4 col-md-2 col-xl py-3 float-end">
                      <button class="btn btn-success w-100" type="submit">Gönder</button>
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
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Settings",
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const setting = ref({
      avatar: "",
      name: "",
      job: "",
      socialMedia: {
        github: "",
        twitter: "",
        linkedin: "",
      },
    });

    const onSubmit = () => {
      console.log(setting);
      //await store.dispatch("addCategory", category);
    };

    return {
      setting,
      onSubmit,
    };
  },
};
</script>
