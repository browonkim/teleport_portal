import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "../views/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: MainLayout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
