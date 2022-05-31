import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import router from './router';
import dataV from '@jiaminghi/data-view';
import '@/permission'; // permission control
import { registerOption } from '@/components/registerOption';
import '@/assets/font/custom-font.css';
import '@/utils/RegisterMap';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(dataV);
registerOption();

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
