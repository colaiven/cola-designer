import Vue from 'vue'
//import cpt_input from '@/components/element/cpt-input'
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
import cpt_chart_map_gc from '@/components/echarts/cpt-chart-map-gc'
import cpt_chart_map_migrate from '@/components/echarts/cpt-chart-map-migrate'
import cpt_dataV_waterLevel from '@/components/dataV/cpt-dataV-waterLevel'
import cpt_dataV_decoration from '@/components/dataV/cpt-dataV-decoration'
import cpt_chart_line from '@/components/echarts/cpt-chart-line'
import cpt_dataV_digitalFlop from '@/components/dataV/cpt-dataV-digitalFlop'
import cpt_dataV_percentPond from '@/components/dataV/cpt-dataV-percentPond'
import cpt_iframe from '@/components/element/cpt-iframe'
import cpt_chart_td_column from '@/components/echarts/cpt-chart-td-column'
import cpt_dataV_activeRing from '@/components/dataV/cpt-dataV-activeRing'
import cpt_chart_gauge from '@/components/echarts/cpt-chart-gauge'
//import cpt_threeJs_dom from '@/components/three/cpt-threeJs-dom'
import cpt_num from '@/components/element/cpt-num'
import cpt_rect_num from '@/components/element/cpt-rect-num'
import cpt_scroll_table from '@/components/element/cpt-scroll-table'

let cptList = [
    cpt_dataV_border,cpt_text,cpt_carousel,cpt_button,cpt_image,
    cpt_chart_column,cpt_chart_td_column,cpt_chart_pie,cpt_chart_clock,cpt_dataV_scrollTable,
    cpt_scroll_table,cpt_dataV_scrollList,cpt_chart_map_gc,cpt_chart_map_migrate,
    cpt_dataV_waterLevel,cpt_dataV_decoration,cpt_chart_line,
    cpt_dataV_digitalFlop,cpt_dataV_percentPond,cpt_iframe,
    cpt_dataV_activeRing,cpt_chart_gauge,cpt_num,
    cpt_rect_num
]

cptList.forEach(ele => {
    Vue.component(ele.name, ele);
});
