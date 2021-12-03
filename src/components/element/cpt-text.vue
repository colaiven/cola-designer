<template>
  <div :style="{textAlign:option.textAlign,color:option.textColor,fontSize: option.textSize+'px',fontStyle:option.fontStyle,
    fontWeight:option.fontWeight,lineHeight:option.textLineHeight+'px',fontFamily:option.textFamily,
    textDecoration:option.textDecoration}" @click="redirect">
    {{cptData}}
  </div>
</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-text",
  title: '文字框',
  icon: 'el-icon-chat-line-square',
  initWidth: 150,
  initHeight: 30,
  group:'basic',
  props: {
    option: Object
  },
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
  methods: {
    refreshCptData(){
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData)
    },
    loadData(){
      getDataStr(this.option.cptDataForm).then(res => {
        this.cptData = res;
      });
    },
    redirect(){
      if (this.option.url){
        window.open(this.option.url)
      }
    }
  },
}
</script>

<style scoped>

</style>
