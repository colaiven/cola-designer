<template>
  <div :id="uuid" style="width: 100%;height:100%;"></div>
</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-chart-pie",
  title: "饼图",
  icon: 'el-icon-pie-chart',
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
      that.chartOption = {
        color: option.pieColor,
        title: {
          text: option.chartTitle,
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
            data: this.cptData,
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
