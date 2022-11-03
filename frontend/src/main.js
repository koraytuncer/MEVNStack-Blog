import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";

const app = createApp(App)
app.use(Toast);
app.use(store)
app.use(router)
app.mount("#app");
