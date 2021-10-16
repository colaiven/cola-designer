import Vue from 'vue'
import cpt_input from '@/components/element/cpt-input'
import cpt_text from '@/components/element/cpt-text'
import cpt_carousel from '@/components/element/cpt-carousel'
import cpt_button from '@/components/element/cpt-button'
import cpt_image from '@/components/element/cpt-image'
import cpt_chart_column from '@/components/echarts/cpt-chart-column'
import cpt_chart_pie from '@/components/echarts/cpt-chart-pie'
import cpt_chart_clock from '@/components/echarts/cpt-chart-clock'
import cpt_dataV_border from '@/components/dataV/cpt-dataV-border'
import cpt_dataV_scrollTable from '@/components/dataV/cpt-dataV-scrollTable'
import cpt_dataV_scrollList from '@/components/dataV/cpt-dataV-scrollList'
import cpt_chart_mapGc from '@/components/echarts/cpt-chart-mapGc'
import cpt_chart_mapMigrate from '@/components/echarts/cpt-chart-mapMigrate'
import cpt_dataV_waterLevel from '@/components/dataV/cpt-dataV-waterLevel'
import cpt_dataV_decoration from '@/components/dataV/cpt-dataV-decoration'
import cpt_chart_line from '@/components/echarts/cpt-chart-line'

let cptList = [
    cpt_dataV_border,
    cpt_input,cpt_text,cpt_carousel,cpt_button,cpt_image,
    cpt_chart_column,cpt_chart_pie,cpt_chart_clock,cpt_dataV_scrollTable,
    cpt_dataV_scrollList,cpt_chart_mapGc,cpt_chart_mapMigrate,
    cpt_dataV_waterLevel,cpt_dataV_decoration,cpt_chart_line
]

let cptGroups = {}
cptList.forEach(ele => {
    Vue.component(ele.name, ele);
    const title = ele.title ? ele.title:'未命名组件';
    const initWidth = ele.initWidth ? ele.initWidth:256;
    const initHeight = ele.initHeight ? ele.initHeight:168;
    const group = ele.group ? ele.group:'default';
    cptGroups[group] = cptGroups[group] ? cptGroups[group]:[]
    cptGroups[group].push({group:group,title: title,name:ele.name,icon:ele.icon,initWidth:initWidth,initHeight:initHeight});
});
export default cptGroups;
