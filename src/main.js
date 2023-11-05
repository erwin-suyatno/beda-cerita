/* eslint-disable no-unused-vars */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Icon } from "@iconify/vue";
const app = createApp(App).component("Icon", Icon).use(router);

app.mount("#app");
