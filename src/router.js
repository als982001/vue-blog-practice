import { createWebHistory, createRouter } from "vue-router";
import ListComponent from "./components/ListComponent.vue";
import DetailComponentVue from "./components/DetailComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import NotFoundVue from "./components/NotFound.vue";
import AuthorComponentVue from "./components/AuthorComponent.vue";
import ContentComponent from "./components/ContentComponent.vue";

const routes = [
  {
    path: "/list",
    component: ListComponent,
  },
  {
    path: "/detail/:id(\\d+)",
    component: DetailComponentVue,
    children: [
      {
        path: "author",
        component: AuthorComponentVue,
      },
      {
        path: "content",
        component: ContentComponent,
      },
    ],
  },
  {
    path: "/",
    component: HomeComponent,
    beforeEnter: () => {
      const login = true;
      if (login === false) {
        alert("로그인 후 이용 가능합니다.");
        return "/login";
      }
    },
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
