<template>
  <div :id="uuid" style="width: 100%;height:100%;"></div>
</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-chart-column",
  title: "柱状图",
  icon: 'el-icon-s-data',
  initWidth: 256,
  initHeight: 191,
  group: 'chart',
  props:{
    width:Number,
    option:Object
  },
  data(){
    return {
      uuid: null,
      chartOption:{},
      chart:undefined,
      cptData:{},
    }
  },
  watch:{
    option:{
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
    loadData(){
      getDataStr(this.option.cptDataForm).then(res => {
        this.cptData = JSON.parse(res);
        this.loadChart(this.option);
      });
    },
    loadChart(option){
      const that = this;
      let columnColor = option.barColor;
      if(option.gradualColor) {
        columnColor = new this.$echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: option.barColor1},
              {offset: 0.5, color: option.barColor2},
              {offset: 1, color: option.barColor3}
            ])
      }
      that.chartOption = {
        color: columnColor,
        title: {
          text:option.chartTitle,
          textStyle:{
            color: option.titleTextColor
          },
          left:option.titleLeft,
          top:option.titleTop
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          show: option.xAxisShow,
          type: 'category',
          data: this.cptData.xData.split(','),
          axisLabel:{
            color: option.xLabelColor,
            rotate:option.xFontRotate//倾斜角度-180~180
          },
          axisLine:{
            lineStyle:{
              color: option.xLineColor
            }
          }
        },
        yAxis: {
          show: option.yAxisShow,
          type: 'value',
          axisLabel:{
            color: option.yLabelColor
          },
          axisLine:{
            show: true,
            lineStyle:{
              color: option.yLineColor
            }
          },
          axisTick:{//y轴刻度线
            show: option.yTickShow
          },
          splitLine: {//网格线
            show: option.yGridLineShow
          }
        },
        series: [{
          data: this.cptData.yData.split(','),
          type: option.barType,//pictorialBar || bar
          showBackground: option.barBgShow,
          symbol: option.barPath,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          barWidth: option.barWidth,
          itemStyle: {
            borderRadius: option.barBorderRadius
          },
          label: {
            show: option.barLabelShow, //开启显示
            position: 'top', //在上方显示
            color: option.barLabelColor,
            fontSize: option.barLabelSize
          }
        }]
      };
      that.chart.setOption(that.chartOption);
    }
  }
}
</script>

<style scoped>

</style>
