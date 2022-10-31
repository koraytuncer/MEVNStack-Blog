import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    post: [],
    categories: [],
    category: [],
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getPost(state) {
      return state.post;
    },
    getCategories(state) {
      return state.categories;
    },
    getCategory(state) {
      return state.category;
    },
  },
  mutations: {
    SET_POSTS(state, post) {
      state.posts = post;
    },
    SET_POST(state, post) {
      state.post = post;
    },
    SET_CATEGORIES(state, category) {
      state.categories = category;
    },
    SET_CATEGORY(state, category) {
      state.category = category;
    },
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    updatePost(state, post) {},
    DELETE_POST(state, postID) {
      let index = state.posts.findIndex((c) => c._id == postID);
      state.posts.splice(index, 1);
    },
  },
  actions: {
    initPosts(context) {
      axios.get(process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + "getAllPosts").then((res) => {
        context.commit("SET_POSTS", res.data.post);
      });
    },
    initPost(context, postSlug) {
      axios.get(process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + postSlug).then((res) => {
        context.commit("SET_POST", res.data.post);
      });
    },
    initCategories(context) {
      axios.get(process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + "getAllCategories").then((res) => {
        context.commit("SET_CATEGORIES", res.data.category);
      });
    },
    initCategory(context, categoryId) {
      axios.get(process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + categoryId).then((res) => {
        context.commit("SET_CATEGORY", res.data.category);
      });
    },
    addPost(context, post) {
      axios.post(process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + "newPost", post).then((res)=>{
        console.log(res)
        context.commit("ADD_POST", post);
      });
     
    },
    updatePost(context, post) {},
    deletePost(context, postID) {
      axios.delete(process.env.VUE_APP_API_URL + process.env.VUE_APP_PREFIX + "deletePost/" + postID).then((res) => {
        context.commit("DELETE_POST", postID);
      });
    },
  },
  modules: {},
});
