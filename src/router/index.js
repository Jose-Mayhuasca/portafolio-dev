import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AppLayout from '@/layout/AppLayout.vue'
import AboutMePage from '@/pages/AboutMePage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import ContactMePage from '@/pages/ContactMePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          component: HomePage,
        },
        {
          path: '/sobre-mi',
          component: AboutMePage,
        },
        {
          path: '/proyectos',
          component: ProjectsPage,
        },
        {
          path: '/contactame',
          component: ContactMePage,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
