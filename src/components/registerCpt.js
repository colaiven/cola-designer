import Vue from 'vue'
import cpt_input from '@/components/element/cpt-input'
import cpt_text from '@/components/element/cpt-text'
import cpt_carousel from '@/components/element/cpt-carousel'
import cpt_button from '@/components/element/cpt-button'
import cpt_image from '@/components/element/cpt-image'
import cpt_chart_column from '@/components/echarts/cpt-chart-column'

let cptList = [
    cpt_input,cpt_text,cpt_carousel,cpt_button,cpt_image,
    cpt_chart_column
]

let cptGroups = {}
cptList.forEach(ele => {
    Vue.component(ele.name, ele);
    const name = ele.title ? ele.title:'未命名组件';
    const initWidth = ele.initWidth ? ele.initWidth:256;
    const initHeight = ele.initHeight ? ele.initHeight:168;
    const group = ele.group ? ele.group:'default';
    cptGroups[group] = cptGroups[group] ? cptGroups[group]:[]
    cptGroups[group].push({group:group,name: name,tag:ele.name,icon:ele.icon,initWidth:initWidth,initHeight:initHeight});
});
export default cptGroups;
