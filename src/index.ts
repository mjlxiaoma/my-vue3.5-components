import * as components from './components'
import type { App } from 'vue'

// 导出单个组件
export * from './components'

// 导出 Vue 插件
export default {
  install: (app: App) => {
    // 注册所有组件
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component as any)
    })
  }
}
