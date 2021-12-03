import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Designer from '@/views/designer/index'
import Preview from '@/views/preview/index'
import Layout from "@/views/manage/Layout";
import DesignList from "@/views/manage/DesignList";
import ImgPool from "@/views/manage/ImgPool";
import Login from "@/views/manage/Login";

export const manageMenus = [
    {
        path: '/designList',
        name: 'DesignList',
        component: DesignList,
        meta: { title: '大屏管理', icon: 'el-icon-data-line' }
    }, {
        path: '/imgPool',
        name: 'imgPool',
        component: ImgPool,
        meta: { title: '资源库管理', icon: 'el-icon-data-line' }
    },/* {
        path: '/imgGroup',
        name: 'imgGroup',
        component: () => import('@/views/manage/ImgGroup'),
        meta: { title: '资源分组管理', icon: 'el-icon-data-line' }
    },*/
]

// 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        }, {
            path: '/',
            component: Layout,
            redirect: '/designList',
            children: manageMenus
        }, {
            path: '/design',
            name: 'Designer',
            component: Designer
        }, {
            path: '/preview',
            name: 'preview',
            component: Preview
        }, {
            path: '/view',
            name: 'view',
            component: Preview
        }
    ]
})
