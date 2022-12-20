import { createRouter, createWebHashHistory } from 'vue-router'
import playListAppView from '../views/playlist-app.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/playlist'
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: playListAppView
    }
  ]
})

export default router
