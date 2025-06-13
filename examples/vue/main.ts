// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue'
import { disableSwipeBack } from '@/directives/disableSwipeBack' // adjust path

import '@ionic/vue/css/core.css'
// …other Ionic CSS imports…

const app = createApp(App)

app.use(IonicVue)
app.use(router)

// register the directive globally
app.directive('disable-swipe-back', disableSwipeBack)

app.mount('#app')
