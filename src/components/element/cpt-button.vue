<template>
  <div style="height: 100%">
    <button style="width: 100%;height: 100%;border: none" @click="redirect()"
          :style="{background:option.attribute.bgColor,color:option.attribute.textColor,
              borderRadius:option.attribute.radius+'px'}">
      {{cptData.value}}
    </button>
  </div>
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-button",
  props:{option:Object},
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
  methods:{
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
  }
}
</script>

<style scoped>

</style>
