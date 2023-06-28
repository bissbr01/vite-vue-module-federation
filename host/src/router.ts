import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Inventory from './views/Inventory.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/inventory', component: Inventory },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})