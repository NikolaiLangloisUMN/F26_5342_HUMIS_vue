import { createRouter, createWebHistory } from 'vue-router'

import HumisHomepage from "@/views/HumisHomepage.vue";
import AboutUs from '@/views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HumisHomepage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
  ],
})

export default router
