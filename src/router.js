import { createWebHistory, createRouter } from "vue-router";
import ListComponent from "./components/ListComponent.vue";
import DetailComponentVue from "./components/DetailComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import NotFoundVue from "./components/NotFound.vue";

const routes = [
  {
    path: "/list",
    component: ListComponent,
  },
  {
    path: "/detail/:id(\\d+)",
    component: DetailComponentVue,
  },
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/:anything(.*)",
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
