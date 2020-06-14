import { createWebHistory, createRouter } from 'vue-router'
import Takeoff from './views/Takeoff.vue'

const history = createWebHistory()
const routes = [
  // { path: "/", component: Home },
  { path: '/', component: Takeoff },
]

const router = createRouter({ history, routes })

export default router
