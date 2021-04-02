import Vue from 'vue'
import App from './App.vue'
import Preview from '@/preview/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

const routes = {
  '/': App,
  '/preview': Preview
}

new Vue({
  render: h => h(routes[window.location.pathname]),
}).$mount('#app')
