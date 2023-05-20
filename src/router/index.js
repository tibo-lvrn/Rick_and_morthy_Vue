import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/personnage',
      name: 'personnage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersonnageView.vue')
    },
    {
      path: '/episode',
      name: 'episode',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EpisodeView.vue')
    },
    {
      path: '/fichepersonnage/:personnageId',
      name: 'fichepersonnage',
      component: () => import('../views/FichePersonnageView.vue')
    },
    {
      path: '/ficheEpisode/:episodeLink',
      name: 'ficheEpisode',
      component: () => import('../views/FicheEpisodeView.vue')
    }
  ]
})

export default router
