import { createRouter, createWebHashHistory } from 'vue-router'
import Inventory from './views/Inventory.vue'
import Checkout from './views/Checkout.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', component: Inventory },
  { path: '/checkout', component: Checkout },
  { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})