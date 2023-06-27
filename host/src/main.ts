import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const BuyNow = defineAsyncComponent(() => import("remote_app/BuyNow"));
const CartIcon = defineAsyncComponent(() => import("remote_app/CartIcon"));

app.component("RemoteApp", BuyNow);
app.component("RemoteApp", CartIcon);
app.mount('#app')


