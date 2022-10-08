import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "./Vuex/store"

const app = createApp(App)
app.use(store)
app.mount('#app')
