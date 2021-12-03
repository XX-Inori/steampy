import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routers'
import store from './store'
import './router/index' // permission control
import '@/assets/styles/index.scss' // global css

const app = createApp(App)

import { Col, Row, Icon } from 'vant'
app.use(Col)
app.use(Row)
app.use(Icon)

app.use(store).use(router).mount('#app')
