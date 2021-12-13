<template>
  <div :id="uuid" style="width: 100%;height:100%;"></div>
</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-chart-line",
  title: "折线图",
  icon: 'el-icon-data-line',
  initWidth: 256,
  initHeight: 191,
  group: 'chart',
  props:{
    width:Number,
    option:Object
  },
  data(){
    return {
      uuid:'',
      chartOption:{},
      chart:undefined,
      cptData:[]
    }
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
    }
  },
  created() {
    this.uuid = require('uuid').v1();
  },
  mounted() {
    this.chart = this.$echarts.init(document.getElementById(this.uuid));
    this.refreshCptData();
  },
  methods:{
    refreshCptData(){
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData)
    },
    loadData() {
      getDataStr(this.option.cptDataForm).then(res => {
        this.cptData = JSON.parse(res);
        this.loadChart(this.option.attribute);
      });
    },
    loadChart(attribute){
      const that = this;
      that.chartOption = {
        color: attribute.lineColor,
        title: {
          text: attribute.title,
          subtext: attribute.subtext,
          textStyle:{
            color: attribute.titleTextColor
          },
          subtextStyle: { fontSize: 12, color: '#aaa' }
        },
        xAxis: {
          type: 'category',
          data: that.cptData.xData.split(','),
          axisLabel:{
            color: attribute.xLabelColor
          },
          axisLine:{
            lineStyle: {
              color: attribute.xLineColor
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            color: attribute.yLabelColor
          },
          axisLine:{
            show: true,
            lineStyle:{
              color: attribute.yLineColor
            }
          },
          axisTick:{//y轴刻度线
            show: attribute.yTickShow
          },
          splitLine: {//网格线
            show: attribute.yGridLineShow
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        series: [{
          data: that.cptData.yData.split(','),
          type: 'line',
          smooth: attribute.smooth,
          areaStyle:{
            color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(80,141,255,0.39)'
            }, {
              offset: .34,
              color: 'rgba(56,155,255,0.25)'
            },{
              offset: 1,
              color: 'rgba(38,197,254,0.00)'
            }])
          }
        }]
      }
      that.chart.setOption(that.chartOption);
    }
  }
}
</script>

<style scoped>

</style>
