<template>
  <div style="text-align: center">
    <div style="font-family:'840CAI978',serif" :style="{color: option.attribute.numColor,fontSize:option.attribute.numSize+'px',
        lineHeight:option.attribute.numHeight+'px'}">
      {{cptData.value}}<span style="font-size: 14px;color: #ccc">{{(cptData.unit?cptData.unit:'')}}</span>
    </div>
    <div style="color: #ccc">{{option.attribute.title}}</div>
  </div>
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-num",
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
    refreshCptData() {
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData)
    },
    loadData() {
      getDataJson(this.option.cptDataForm).then(res => {
        this.cptData = res;
      });
    },
  }
}
</script>

<style scoped>

</style>
