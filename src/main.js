import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import App from './App.vue'
import "./index.css"
import router from './routes';


createApp(App).use(ElementPlus).use(router).mount('#app')
