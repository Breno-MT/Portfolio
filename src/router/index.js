/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import Portfolio from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_URL),
  routes: [{ path: '/Portfolio', component: Portfolio }],
})

router.addRoute({path: '/Portfolio', component: Portfolio})

export default router
