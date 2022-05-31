<template>
  <div style="width: 100%;height:100%;" :id="uuid"></div>
</template>

<script>
import cityPosition from '@/assets/map/cityPosition.json'
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";
export default {
  name: "cpt-chart-mapMigrate",
  title: "迁徙地图",
  icon: 'map-migrate',
  group: 'map',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  data(){
    return {
      uuid:'',
      cptData:{},
      chartOption:{},
      chart:undefined,
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
  methods: {
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
      const planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
      const convertData = function (toData) {
        const res = [];
        toData.forEach(item => {
          const toPosition = cityPosition[item.name];
          if (toPosition) {
            res.push([that.cptData.start,toPosition]);
          }
        })
        return res;
      };

      const seaData = function (toData){
        const res = [];
        toData.forEach(item => {
          let value = cityPosition[item.name].concat(item.value)
          res.push({name:item.name,value:value})
        })
        return res;
      }

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
        tooltip : {
          trigger: 'item'
        },
        geo: {
          map: 'china',
          label: {
            show: true,
            color: "#aaa"
          },
          zoom: 1.23,
          roam: attribute.roam,//允许缩放
          itemStyle: {
            areaColor: '#323c48',
            borderColor: '#404a59',
          }
        },
        series: [{
          name: attribute.seriesName,
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
          },
          lineStyle: {
            color: attribute.seriesColor,
            width: 0,
            curveness: 0.2
          },
          data: convertData(this.cptData.end)
        },
          {
            name: attribute.seriesName,
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              color: attribute.seriesColor,
              width: 1,
              opacity: 0.4,
              curveness: 0.2
            },
            data: convertData(this.cptData.end)
          },
          {
            name: attribute.seriesName,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              show: true,
              position: 'right',
              formatter: '{b}'
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              color: attribute.seriesColor
            },
            data: seaData(this.cptData.end)
          }]
      }
      that.chart.setOption(that.chartOption);
    }
  }
}
</script>

<style scoped>

</style>
