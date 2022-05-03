<template>
  <div style="width: 100%;height: 100%" :style="{textAlign:option.attribute.textAlign,color:option.attribute.textColor,fontSize: option.attribute.textSize+'px',
    fontStyle:option.attribute.fontStyle, fontWeight:option.attribute.fontWeight,lineHeight:option.attribute.textLineHeight+'px',
    backgroundColor:option.attribute.bgColor,
    fontFamily:option.attribute.textFamily, textDecoration:option.attribute.textDecoration}" @click="redirect">
    {{cptData.value}}
  </div>
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-text",
  title: '文字框',
  icon: 'el-icon-chat-line-square',
  initWidth: 150,
  initHeight: 40,
  group:'basic',
  props: {
    option: Object
  },
  data() {
    return {
      cptData: {},
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
      getDataJson(this.option.cptDataForm).then(res => {
        this.cptData = res;
      });
    },
    redirect(){
      if (this.option.attribute.url){
        if (this.option.attribute.url.startsWith("view")){
          this.$router.push(this.option.attribute.url)
          this.$emit("reload")
        }else{
          window.open(this.option.attribute.url)
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
