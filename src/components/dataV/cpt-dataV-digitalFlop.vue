<template>
  <dv-digital-flop :config="flopConfig" style="width:100%;height:100%;" />
</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-dataV-digitalFlop",
  title: "数字翻牌器",
  icon: 'el-icon-data-analysis',
  initWidth: 256,
  initHeight: 80,
  group: 'basic',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  data(){
    return {
      uuid: null,
      flopConfig: {}
    }
  },
  watch: {
    option: {
      handler() {
        this.loadData();
      },
      deep: true//深度监听
    },
    width(){
      this.loadData();
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
    loadData(){
      getDataStr(this.option.cptDataForm).then(res => {
        this.flopConfig = {
          number: res.split(',').map(Number),
          content: this.option.content,
          toFixed: this.option.toFixedNum,
          textAlign: this.option.textAlign,
          rowGap: this.option.rowGap,
          style: this.option.style
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
