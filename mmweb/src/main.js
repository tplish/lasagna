import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'

// CSS
import 'github-markdown-css'
import 'element-plus/dist/index.css'

createApp(App)
	.use(ElementPlus)
	.use(router)
	.mount('#app');
