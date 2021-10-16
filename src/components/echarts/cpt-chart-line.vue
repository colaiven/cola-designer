<template>
  <div :id="uuid" style="width: 100%;height:100%;"></div>
</template>

<script>
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
      this.cptData = JSON.parse(this.option.cptDataForm.dataText)
      if(this.option.cptDataForm.dataSource === 2){//调接口
        this.$message.warning('接口还未实现')
      }
      this.loadChart(this.option);
    },
    loadChart(option){
      const that = this;
      that.chartOption = {
        color: option.lineColor,
        title: {
          text: option.title,
          subtext: option.subtext,
          textStyle:{
            color: option.titleTextColor
          },
          subtextStyle: { fontSize: 12, color: '#aaa' }
        },
        xAxis: {
          type: 'category',
          data: that.cptData.xData.split(','),
          axisLabel:{
            color: option.xLabelColor
          },
          axisLine:{
            lineStyle: {
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        series: [{
          data: that.cptData.yData.split(','),
          type: 'line',
          smooth: option.smooth,
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
