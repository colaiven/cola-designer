<template>
  <dv-active-ring-chart :key="refreshFlagKey" :config="config" style="width:100%;height:100%" />
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-dataV-activeRing",
  title: "动态环图",
  icon: 'active-ring',
  group: 'chart',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  watch: {
    'option.attribute': {
      handler() {
        this.loadData();
      },
      deep: true//深度监听
    },
    width(){
      this.refreshFlagKey = require('uuid').v1();
    },
    height(){
      this.refreshFlagKey = require('uuid').v1();
    }
  },
  data(){
    return {
      uuid:null,
      config:{},
      refreshFlagKey:null,
    }
  },
  created() {
    this.uuid = require('uuid').v1();
    this.refreshCptData();
  },
  methods:{
    refreshCptData(){
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData);
      this.refreshFlagKey = require('uuid').v1();
    },
    loadData(){
      getDataJson(this.option.cptDataForm).then(res => {
        this.config = JSON.parse(JSON.stringify(this.option.attribute))
        this.config.data = res;
      });
    }
  }
}
</script>

<style scoped>

</style>
