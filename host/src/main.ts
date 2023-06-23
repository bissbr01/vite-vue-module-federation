import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

const RemoteApp = defineAsyncComponent(() => import("remote_app/App"));

app.component("RemoteButton", RemoteApp);

app.mount('#app')


