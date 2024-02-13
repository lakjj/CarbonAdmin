import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import router from './router' //导入router文件夹下的index.js，如果文件名为index.js，可
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.css'
import axios from 'axios'
import { Message //导入element-ui提供的Message组件，可以实现信息提示
} from 'element-ui'

axios.defaults.timeout=5000
axios.defaults.withCredentials=true
axios.defaults.baseURL='http://123.57.202.132:8889/api'
Vue.prototype.$http=axios
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$message=Message 
axios.interceptors.request.use(config =>{ 
config.headers.Authorization="Bearer "+window.sessionStorage.getItem('token')
return config;
})
new Vue({
render: h => h(App),
router 
}).$mount('#app')
