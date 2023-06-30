import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

const BuyNow = defineAsyncComponent(() => import("remote-retailing/BuyNow"));
const CartIcon = defineAsyncComponent(() => import("remote-retailing/CartIcon"));

app.component('BuyNow', BuyNow)
app.component('CartIcon', CartIcon)
app.use(pinia)
app.mount('#app')
