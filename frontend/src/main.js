//Adds picocss.
import '../node_modules/@picocss/pico/css/pico.min.css';

//Adds toastify.

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')