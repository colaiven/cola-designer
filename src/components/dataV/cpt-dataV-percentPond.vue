<template>
  <dv-percent-pond :key="refreshFlagKey" :config="pondConfig" style="width: 100%;height: 100%" />
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-dataV-percentPond",
  title: "进度池",
  icon: 'el-icon-film',
  initWidth: 300,
  initHeight: 100,
  group: 'basic',
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
  data() {
    return {
      uuid: null,
      pondConfig:{},
      refreshFlagKey: null //强制刷新视图
    }
  },
  created() {
    this.uuid = require('uuid').v1();
    this.refreshFlagKey = require('uuid').v1();
    this.refreshCptData();
  },
  methods: {
    refreshCptData() {
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData)
    },
    loadData(){
      getDataJson(this.option.cptDataForm).then(res => {
        let tempConfig = JSON.parse(JSON.stringify(this.option.attribute));
        tempConfig.value = res.value;
        tempConfig.lineDash = [tempConfig.lineWidth, tempConfig.lineSpace]
        this.pondConfig = tempConfig;
        this.refreshFlagKey = require('uuid').v1(); //强制刷新视图 报错为dataV组件内部bug
      });
    }
  }
}
</script>

<style scoped>

</style>
