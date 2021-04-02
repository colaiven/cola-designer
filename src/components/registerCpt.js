import Vue from 'vue'
import cpt_input from '@/components/cpt-input'
import cpt_text from '@/components/cpt-text'
import cpt_carousel from '@/components/cpt-carousel'
import cpt_button from '@/components/cpt-button'
import cpt_image from '@/components/cpt-image'

let cptList = [
    cpt_input,cpt_text,cpt_carousel,cpt_button,cpt_image
]

let listComponent = [];
cptList.forEach(ele => {
    Vue.component(ele.name, ele);
    const name = ele.text?ele.text:'未知组件';
    const initWidth = ele.initWidth?ele.initWidth:300;
    const initHeight = ele.initHeight?ele.initHeight:200;
    listComponent.push({name: name,tag:ele.name,icon:ele.icon,initWidth:initWidth,initHeight:initHeight})
});
export default listComponent;
