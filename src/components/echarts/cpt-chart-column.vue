<template>
  <div :id="uuid" style="width: 100%;height:100%;"></div>
</template>

<script>
export default {
  name: "cpt-chart-column",
  title: "柱状图",
  icon: 'el-icon-thumb',
  initWidth: 400,
  initHeight: 300,
  group: 'echarts',
  props:{option:Object},
  data(){
    return {
      uuid:'',
      chartOption:{},
      chart:undefined,
    }
  },
  watch:{
    option:{
      handler(obj,newObj) {
        this.loadChart(newObj);
      },
      deep: true//深度监听
    }
  },
  created() {
    this.uuid = require('uuid').v1();
  },
  mounted() {
    this.chart = this.$echarts.init(document.getElementById(this.uuid));
    this.loadChart(this.option);
  },
  methods:{
    loadChart(option){
      const that = this;
      that.chartOption = {
        color: option.barColor,
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
          type: 'category',
          data: option.xData.split(','),
          axisLabel:{
            color: option.xLabelColor
          },
          axisLine:{
            lineStyle:{
              color: option.xLineColor
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            color: option.yLabelColor
          },
          axisLine:{
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
          data: option.yData.split(','),
          type: 'bar',
          showBackground: option.barBgShow,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          barWidth: option.barWidth,
          itemStyle: {
            normal: {
              barBorderRadius: option.barBorderRadius
            }
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
