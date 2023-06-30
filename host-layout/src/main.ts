import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'

const pinia = createPinia()
const app = createApp(App)
const BuyNow = defineAsyncComponent(() => import("remote-retailing/BuyNow"));
const Cart = defineAsyncComponent(() => import("remote-retailing/Cart"));
const Inventory = defineAsyncComponent(() => import("remote-inventory/Inventory"))

app.use(pinia)
app.use(router)
app.component("BuyNow", BuyNow);
app.component("Cart", Cart);
app.component("Inventory", Inventory);
app.mount('#app')


