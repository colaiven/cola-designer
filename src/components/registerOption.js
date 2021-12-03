import Vue from 'vue'

import cpt_button_option from '@/components/element/options/cpt-button-option'
import cpt_text_option from '@/components/element/options/cpt-text-option'
//import cpt_input_option from '@/components/element/options/cpt-input-option'
import cpt_image_option from '@/components/element/options/cpt-image-option'
import cpt_carousel_option from '@/components/element/options/cpt-carousel-option'
import cpt_chart_column_option from '@/components/echarts/options/cpt-chart-column-option'
import cpt_chart_pie_option from '@/components/echarts/options/cpt-chart-pie-option'
import cpt_chart_clock_option from '@/components/echarts/options/cpt-chart-clock-option'
import cpt_dataV_border_option from '@/components/dataV/options/cpt-dataV-border-option'
import cpt_dataV_scrollTable_option from '@/components/dataV/options/cpt-dataV-scrollTable-option'
import cpt_dataV_scrollList_option from '@/components/dataV/options/cpt-dataV-scrollList-option'
import cpt_chart_mapGc_option from '@/components/echarts/options/cpt-chart-mapGc-option'
import cpt_chart_mapMigrate_option from '@/components/echarts/options/cpt-chart-mapMigrate-option'
import cpt_dataV_waterLevel_option from '@/components/dataV/options/cpt-dataV-waterLevel-option'
import cpt_dataV_decoration_option from '@/components/dataV/options/cpt-dataV-decoration-option'
import cpt_chart_line_option from '@/components/echarts/options/cpt-chart-line-option'
import cpt_dataV_digitalFlop_option from '@/components/dataV/options/cpt-dataV-digitalFlop-option'
import cpt_dataV_percentPond_option from '@/components/dataV/options/cpt-dataV-percentPond-option'

let cptOptionsList = [
    cpt_button_option, cpt_text_option, cpt_image_option,
    cpt_carousel_option, cpt_chart_column_option,cpt_chart_pie_option,cpt_chart_clock_option,
    cpt_dataV_border_option,cpt_dataV_scrollTable_option,cpt_dataV_scrollList_option,
    cpt_chart_mapGc_option,cpt_chart_mapMigrate_option,cpt_dataV_waterLevel_option,
    cpt_dataV_decoration_option,cpt_chart_line_option,cpt_dataV_digitalFlop_option,
    cpt_dataV_percentPond_option
]
let listOptions = [];
cptOptionsList.forEach(ele => {
    Vue.component(ele.name, ele);
    listOptions.push(ele.name);
})
export default listOptions;
