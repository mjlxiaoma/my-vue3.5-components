import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 导入组件库
import * as components from './components'

const app = createApp(App)

// 注册所有组件
Object.entries(components).forEach(([name, component]) => {
  app.component(name, component)
})

app.mount('#app')

