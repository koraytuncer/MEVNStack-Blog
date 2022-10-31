import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/",
    component: () => import("@/views/layouts/Layout.vue"),
    children: [
      {
        path: "/",
        name: "Main",
        component: () => import("@/views/Main/Main.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/page/About.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/page/Contact.vue"),
      },
      {
        path: "/project",
        name: "project",
        component: () => import("@/views/page/Project.vue"),
      },
      {
        path: "/articleDetail/:slug",
        name: "articleDetail",
        props: true,
        component: () => import("@/views/page/Article/ArticleDetail.vue"),
      },
      {
        path: "/categoryList/:id",
        name: "categoryList",
        props: true,
        component: () => import("@/views/page/CategoryList.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/views/layouts/Dashboard.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard/index.vue"),
      },
      {
        path: "/postList",
        name: "postList",
        props: true,
        component: () => import("@/views/Dashboard/Posts/PostList.vue"),
      },
      {
        path: "/newPost",
        name: "newPost",
        props: true,
        component: () => import("@/views/Dashboard/Posts/PostAdd.vue"),
      },
      {
        path: "/postEdit/:slug",
        name: "post-edit",
        props: true,
        component: () => import("@/views/Dashboard/Posts/PostAdd.vue"),
      },
      {
        path: "/categoryLists",
        name: "categoryLists",
        component: () => import("@/views/Dashboard/Category/CategoryList.vue"),
      },
      {
        path: "/newCategory",
        name: "newCategory",
        component: () => import("@/views/Dashboard/Category/CategoryAdd.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Auth/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
