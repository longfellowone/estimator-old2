import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Takeoff from '../views/Takeoff.vue'

const history = createWebHistory()

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Takeoff', component: Takeoff },
]

const router = createRouter({ history, routes })

export default router
