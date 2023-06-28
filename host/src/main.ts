import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'

const pinia = createPinia()
const app = createApp(App)
const BuyNow = defineAsyncComponent(() => import("remote_app/BuyNow"));
const CartIcon = defineAsyncComponent(() => import("remote_app/CartIcon"));

app.use(pinia)
app.use(router)
app.component("BuyNow", BuyNow);
app.component("CartIcon", CartIcon);
app.mount('#app')


