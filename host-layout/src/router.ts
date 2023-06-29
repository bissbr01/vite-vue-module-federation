import { createRouter, createWebHashHistory } from 'vue-router'
import Inventory from './views/Inventory.vue'
import Checkout from './views/Checkout.vue'
import About from './views/About.vue'
import Details from './views/Details.vue'

const routes = [
  { path: '/', component: Inventory },
  { path: '/item/:id', component: Details },
  { path: '/checkout', component: Checkout },
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})