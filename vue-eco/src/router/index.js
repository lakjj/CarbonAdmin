import Vue from "vue"
import VueRouter from "vue-router"
import Login from '../views/login/Login'
import Home from '../components/Home'
Vue.use(VueRouter) //这里使用use
const routes=[
{path:'/',redirect:"/login"},
{path:'/login',component:Login},
{path:'/home',component:Home},
]
const router=new VueRouter({
routes //这里将routes导入
})
export default router//将router暴露给其他模块