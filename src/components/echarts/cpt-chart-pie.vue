<template>
  <div :id="uuid" style="width: 100%;height:100%;"></div>
</template>

<script>
export default {
  name: "cpt-chart-pie",
  title: "饼图",
  icon: 'el-icon-pie-chart',
  initWidth: 256,
  initHeight: 191,
  group: 'echarts',
  props:{
    width:Number,
    option:Object
  },
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
    this.loadChart(this.option);
  },
  methods:{
    loadChart(option){
      const that = this;
      that.chartOption = {
        title: {
          text: option.chartTitle,
          //backgroundColor: '#EEE',
          subtext: option.subtext,
          left: option.titleX,
          top:option.titleY,
          textStyle: { fontSize: option.titleFontSize, color: option.titleTextColor },
          // 副标题文本样式设置
          subtextStyle: { fontSize: 12, color: '#aaa' }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: option.orient,
          x: option.legendX,
          y: option.legendY,
          textStyle:{
            color: option.legendTextColor
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            label: {
              fontSize: 14,
              color: '#ddd'
            },
            data: JSON.parse(option.seriesData),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      that.chart.setOption(that.chartOption);
    }
  }
}
</script>

<style scoped>

</style>
