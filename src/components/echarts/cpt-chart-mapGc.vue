<template>
  <div style="width: 100%;height:100%;" :id="uuid"></div>
</template>

<script>
export default {
  name: "cpt-chart-mapGc",
  title: "渐变地图",
  icon: 'el-icon-map-location',
  initWidth: 350,
  initHeight: 310,
  group: 'map',
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
    loadChart(option) {
      const that = this;
      that.chartOption = {
        title : {
          text: option.titleText,
          subtext: option.subtext,
          left: 'center',
          textStyle : {
            color: option.titleColor,
            fontSize: option.titleFontSize
          },
          subtextStyle: {
            color: option.subTitleColor,
            fontSize: option.subTitleFontSize
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
            label: option.piecesLabel1,
            color: option.piecesColor1
          }, {
            gte: 10,
            lte: 100,
            label: option.piecesLabel2,
            color: option.piecesColor2
          }, {
            gte: 1,
            lt: 10,
            label: option.piecesLabel3,
            color: option.piecesColor3
          }, {
            gt: 0,
            lt: 1,
            label: option.piecesLabel4,
            color: option.piecesColor4
          }, {
            value: 0,
            label: option.piecesLabel5,
            color: option.piecesColor5
          }],
          show: !0
        },
        geo: {
          map: "china",
          roam: option.roam,//允许缩放
          //scaleLimit: { min: 1, max: 2 },//允许缩放级别
          zoom: 1.23,
          label: {
            show: true,
            fontSize: option.geoLabelSize,
            color: option.geoLabelColor
          },
          itemStyle: {
            borderColor: "#777",//边界线颜色
          },
        },
        series: [{
          name: option.seriesName,
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
