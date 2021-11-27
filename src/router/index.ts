import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NewDispatch from "../views/NewDispatch.vue";
import DispatchDetails from "../views/DispatchDetails.vue";
import Result from "../views/Result.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "NewDispatch",
    component: NewDispatch,
  },
  {
    path: "/dispatches",
    name: "Dispatches",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dispatches.vue"),
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  },
  {
    path: "/dispatches/:id",
    name: "Dispatches",
    component: DispatchDetails
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
