import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import App from '@/App.vue'
import router from '@/router'

import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/main.scss'
import * as SS from '@/assets/scripts/SmoothScroll.min.js'

SmoothScroll({
  animationTime: 800,
  stepSize: 75,
  accelerationDelta: 30,
  accelerationMax: 2,
  keyboardSupport: true,
  arrowScroll: 50,
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,
  touchpadSupport: true,
  fixedBackground: true,
})

const app = createApp(App)
app.use(router)

const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

app.mount('#app')
