<template>
  <div style="width: 100%;height:100%;" :id="uuid"></div>
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-chart-mapGc",
  title: "渐变地图",
  icon: 'map-gc',
  group: 'map',
  props:{
    width:Number,
    height:Number,
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
    },
    height(){
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
      getDataJson(this.option.cptDataForm).then(res => {
        this.cptData = res;
        this.loadChart(this.option.attribute);
      });
    },
    loadChart(attribute) {
      const that = this;
      that.chartOption = {
        title : {
          text: attribute.titleText,
          subtext: attribute.subtext,
          left: attribute.titleLeft,
          top: attribute.titleTop,
          textStyle : {
            color: attribute.titleColor,
            fontSize: attribute.titleFontSize
          },
          subtextStyle: {
            color: attribute.subTitleColor,
            fontSize: attribute.subTitleFontSize
          }
        },
        tooltip: {
          formatter: function(e) {//e, t, n
            return e.seriesName + "<br />" + e.name + "：" + e.value
          }
        },
        visualMap: {
          min: 0,
          max: 100,
          left: 20,
          bottom: 20,
          showLabel: !0,
          text: ["高", "低"],
          textStyle:{
            color:'#ddd'
          },
          pieces: [{
            gt: 100,
            label: attribute.piecesLabel1,
            color: attribute.piecesColor1
          }, {
            gte: 10,
            lte: 100,
            label: attribute.piecesLabel2,
            color: attribute.piecesColor2
          }, {
            gte: 1,
            lt: 10,
            label: attribute.piecesLabel3,
            color: attribute.piecesColor3
          }, {
            gt: 0,
            lt: 1,
            label: attribute.piecesLabel4,
            color: attribute.piecesColor4
          }, {
            value: 0,
            label: attribute.piecesLabel5,
            color: attribute.piecesColor5
          }],
          show: !0
        },
        geo: {
          map: attribute.map,
          roam: attribute.roam,//允许缩放
          //scaleLimit: { min: 1, max: 2 },//允许缩放级别
          zoom: 1.23,
          label: {
            show: true,
            fontSize: attribute.geoLabelSize,
            color: attribute.geoLabelColor
          },
          itemStyle: {
            borderColor: "#777",//边界线颜色
          },
        },
        series: [{
          name: attribute.seriesName,
          type: "map",
          geoIndex: 0,
          data: this.cptData
        }]
      }
      that.chart.setOption(that.chartOption);
    }
  }
}
</script>

<style scoped>

</style>
