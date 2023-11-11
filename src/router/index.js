import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import TentangKami from "../components/TentangKami.vue";
import Menu from "../components/Menu.vue";
import Kontak from "../components/Kontak.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: TentangKami },
  { path: "/menu", component: Menu },
  { path: "/kontak", name: "Kontak", component: Kontak },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
