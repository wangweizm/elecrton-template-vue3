import { createApp } from 'vue'
import createRouter from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'
import App from './App.vue'

createApp(App).use(createRouter).mount('#app')
