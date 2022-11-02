<template>
  <div class="page-wrapper">
    <Header title="Yazı Listesi" button="Yazı Oluştur" toLink="newPost" buttonShow="false" />
    <div class="page-body">
      <div class="container-xl">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Yazılar</h3>
          </div>
          <div class="table-responsive">
            <table class="table card-table table-vcenter text-nowrap datatable">
              <thead>
                <tr>
                  <th class="w-1">No</th>
                  <th>Başlık</th>
                  <th>Yazar</th>
                  <th>Kategori</th>
                  <th>Oluşturma Tarihi</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(post, index) in posts" :key="index">
                  <td>
                    <span class="text-muted">{{ index + 1 }}</span>
                  </td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.author }}</td>
                  <td>
                    <span :style="{ color: post.category.color }">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-point" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    </span>
                    {{ post.category.title }}
                  </td>
                  <td>{{ dateTime(post.updatedAt) }}</td>
                  <td>
                    <div class="d-flex">
                      <router-link 
                      class="me-2" 
                      :to="{ name: 'post-edit', params: { slug: post.slug } }" 
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                          height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                          stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                          <path d="M16 5l3 3"></path>
                        </svg>
                      </router-link>
                      <router-link to="" @click="deletePost(post._id)" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24"
                          height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                          stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <line x1="4" y1="7" x2="20" y2="7"></line>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                        </svg>
                      </router-link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer d-flex align-items-center">
            <p class="m-0 text-muted">
              <span>{{ posts.length }}</span> Yazı Listeleniyor.
            </p>
            <ul class="pagination m-0 ms-auto">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                  <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  prev
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item">
                <a class="page-link" href="#">
                  next
                  <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </a>
              </li>
            </ul>
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
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import moment from "moment";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const posts = computed(() => store.getters.getPosts);
    onMounted(() => store.dispatch("initPosts"));

    const deletePost = (id)=>{
        store.dispatch("deletePost",id)
      }


    const dateTime = (value) => {
      return moment(value).format("DD/MM/YYYY");
    };

    return { posts, dateTime,deletePost };
  },
};
</script>
