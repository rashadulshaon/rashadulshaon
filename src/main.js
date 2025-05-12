import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import App from '@/App.vue'
import router from '@/router'

import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/main.scss'

const app = createApp(App)
app.use(router)

const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

app.mount('#app')
