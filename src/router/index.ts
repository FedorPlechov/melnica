import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NewDispatch from "../views/NewDispatch.vue";
import DispatchDetails from "../components/dispatches/DispatchDetails.vue";
import AllDispatches from "../views/AllDispatches.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "NewDispatch",
    component: NewDispatch,
  },
  {
    path: "/dispatches",
    name: "AllDispatches",
    component: AllDispatches,
  },
  {
    path: "/dispatches/:id",
    name: "DispatchDetails",
    component: DispatchDetails
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
