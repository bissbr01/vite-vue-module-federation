import { createRouter, createWebHashHistory } from 'vue-router'
import InventoryView from './views/InventoryView.vue'
import Checkout from './views/Checkout.vue'
import About from './views/About.vue'
import Details from './views/Details.vue'

const routes = [
  { path: '/', component: InventoryView },
  { path: '/item/:id', component: Details },
  { path: '/checkout', component: Checkout },
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})