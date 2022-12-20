import { createRouter, createWebHashHistory } from 'vue-router'
import playListView from '../views/play-list.vue'

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
      component: playListView
    }
  ]
})

export default router
