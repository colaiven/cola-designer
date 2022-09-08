<template>
  <div style="font-family: hooge;height: 100%">
    <table style="width: 100%;height: 100%;text-align: center;">
      <tr style="height: 100%">
        <td v-for="item in cptData.value.length" :key="item"
            :style="{width:1/cptData.value.length*100+'%',padding:option.attribute.padding+'px'}">
          <div style="border: 1px solid;width: 100%;height: 100%;"
               :style="{lineHeight:height-option.attribute.padding*2+'px',backgroundColor:option.attribute.bgColor,
               borderColor:option.attribute.borderColor,fontSize: option.attribute.fontSize+'px',color: option.attribute.color}">
            {{cptData.value.substr(item-1,1)}}
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-rect-num",
  props: {
    option: Object,
    height:Number
  },
  data() {
    return {
      cptData: {value:'12345'},
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
