import DefaultTheme from 'vitepress/theme'
import CardLink from './components/CardLink.vue'
import './style.css'
// 可选：导入全局样式
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('CardLink', CardLink)
    
    // 可继续注册其他组件...
    // app.component('CardGrid', CardGrid)
  }
}