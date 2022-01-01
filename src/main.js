import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routers'
import store from './store'
import './router/index' // permission control
import '@/assets/styles/index.scss' // global css
import appUseVant from '@/utils/vants'

const app = createApp(App)

appUseVant(app)

app.use(store).use(router).mount('#app')
