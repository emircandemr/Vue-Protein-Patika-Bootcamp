import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App)
app.use(('vue-moment'));
app.mount('#app')

