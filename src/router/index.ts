import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import DiscogView from "@/views/DiscogView.vue";
import ShopMainView from "@/views/shop/ShopMainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/discog",
      name: "discog",
      component: DiscogView
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopMainView
    }
  ]
})

export default router
