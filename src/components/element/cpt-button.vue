<template>
  <div style="height: 100%">
    <el-button style="width: 100%;height: 100%" @click="redirect()"
          :style="{background:option.bgColor,color:option.textColor,
              borderRadius:option.radius+'px'}">
      {{cptData}}
    </el-button>
  </div>
</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-button",
  title: "按钮",
  icon: 'el-icon-thumb',
  initWidth: 100,
  initHeight: 30,
  group:'basic',
  props:{option:Object},
  data() {
    return {
      cptData: '',
      uuid: null
    }
  },
  created() {
    this.uuid = require('uuid').v1();
    this.refreshCptData();
  },
  methods:{
    refreshCptData(){
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData)
    },
    loadData(){
      getDataStr(this.option.cptDataForm).then(res => {
        this.cptData = res;
      });
    },
    redirect(){
      if(this.option.url){
        window.open(this.option.url)
      }
    }
  }
}
</script>

<style scoped>

</style>
