<template>
  <dv-water-level-pond :key="refreshFlagKey" :config="config" :style="{width:width+'px',height:height+'px'}" />
</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";
export default {
  name: "cpt-dataV-waterLevel",
  title: "水位图",
  icon: 'el-icon-goblet-square-full',
  initWidth: 120,
  initHeight: 100,
  group: 'chart',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  data(){
    return {
      config: {},
      uuid: null,
      refreshFlagKey: null
    }
  },
  watch: {
    'option.attribute': function() {
      this.refreshCptData()
    },
    width(){
      this.refreshCptData()
    }
  },
  created() {
    this.uuid = require('uuid').v1();
    this.refreshFlagKey = require('uuid').v1();
    this.refreshCptData();
  },
  methods:{
    refreshCptData(){
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData);
      this.refreshFlagKey = require('uuid').v1();
    },
    loadData(){
      getDataStr(this.option.cptDataForm).then(res => {
        this.config = JSON.parse(JSON.stringify(this.option.attribute))
        this.config.data = JSON.parse(res);
      });
    }
  }
}
</script>

<style scoped>

</style>
