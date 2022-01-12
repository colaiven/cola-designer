<template>
  <div :id="uuid" style="width: 100%;height:100%;"></div>
</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-chart-gauge",
  title: "仪表盘",
  icon: 'el-icon-stopwatch',
  initWidth: 256,
  initHeight: 191,
  group: 'chart',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  watch:{
    'option.attribute':{
      handler(obj,newObj) {
        this.loadChart(newObj);
      },
      deep: true//深度监听
    },
    width(){
      this.chart.resize();
    },
    height(){
      this.chart.resize();
    }
  },
  data(){
    return {
      uuid:'',
      chartOption:{},
      chart:null,
      cptData:0
    }
  },
  created() {
    this.uuid = require('uuid').v1();
  },
  mounted() {
    this.chart = this.$echarts.init(document.getElementById(this.uuid), 'dark');
    this.refreshCptData();
  },
  methods:{
    refreshCptData(){
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData)
    },
    loadData(){
      getDataStr(this.option.cptDataForm).then(res => {
        this.cptData = parseFloat(res);
        this.loadChart(this.option.attribute);
      });
    },
    loadChart(attribute) {
      const that = this;
      that.chartOption = {
        backgroundColor:'',
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: 'Pressure',
            type: 'gauge',
            radius : '100%',
            axisLine: {
              lineStyle: {
                width: attribute.lineWidth,
                color: [
                  [0.3, attribute.color1],
                  [0.7, attribute.color2],
                  [1, attribute.color3]
                ]
              }
            },
            progress: {
              show: true,
              width: attribute.lineWidth,
            },
            itemStyle:{
              color: attribute.itemColor
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}'
            },
            data: [
              {
                value: that.cptData,
                name: attribute.title
              }
            ]
          }
        ]
      }
      that.chart.setOption(that.chartOption);
    }
  }
}
</script>

<style scoped>

</style>
