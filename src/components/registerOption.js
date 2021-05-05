import Vue from 'vue'

import cpt_button_option from '@/components/element/options/cpt-button-option'
import cpt_text_option from '@/components/element/options/cpt-text-option'
import cpt_input_option from '@/components/element/options/cpt-input-option'
import cpt_image_option from '@/components/element/options/cpt-image-option'
import cpt_carousel_option from '@/components/element/options/cpt-carousel-option'
import cpt_chart_column_option from '@/components/echarts/options/cpt-chart-column-option'

let cptOptionsList = [
    cpt_button_option, cpt_text_option, cpt_input_option, cpt_image_option,
    cpt_carousel_option, cpt_chart_column_option
]
let listOptions = [];
cptOptionsList.forEach(ele => {
    Vue.component(ele.name, ele);
    listOptions.push(ele.name);
})
export default listOptions;
