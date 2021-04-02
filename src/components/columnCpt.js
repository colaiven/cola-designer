import Vue from 'vue'
import cpt_case from '@/components/cpt-case'

let cptList = [
    cpt_case
]

let columnComponent = [];
cptList.forEach(ele => {
    Vue.component(ele.name, ele);
    const name = ele.text?ele.text:'未知组件';
    const initWidth = ele.initWidth?ele.initWidth:300;
    const initHeight = ele.initHeight?ele.initHeight:200;
    columnComponent.push({name: name,tag:ele.name,initWidth:initWidth,initHeight:initHeight})
});
export default columnComponent;
