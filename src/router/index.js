import Vue from 'vue'  // 导入vue
import VueRouter from 'vue-router' // 导入vue-router
Vue.use(VueRouter)
// 1. 定义（路由）组件
import Designer from '@/views/designer/index'
import Preview from '@/views/preview/index'
// 2. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
    // 3. 定义路由，每个路由应该映射一个组件，
    // “component”可以是通过 Vue.extend() 创建的组件构造器，
    // 或者，只是一个组件配置对象。
    routes: [
        {
            path: '/',
            name: 'Designer',
            component: Designer
        }, {
            path: '/preview',
            name: 'preview',
            component: Preview
        }
    ]
})
