import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

const BuyNow = defineAsyncComponent(() => import("remote-retailing/BuyNow"));
const Cart = defineAsyncComponent(() => import("remote-retailing/Cart"));

app.component('BuyNow', BuyNow)
app.component('Cart', Cart)
app.use(pinia)
app.mount('#app')
