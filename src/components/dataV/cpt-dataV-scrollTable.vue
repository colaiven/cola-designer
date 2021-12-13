<template>
  <div>
<!--    组件内部没有设置deep监听props，数据变更时，请生成新的props，不然组件将无法刷新状态-->
    <dv-scroll-board :config="config" :style="{width:width+'px',height:height+'px'}" />
  </div>

</template>

<script>
import {getDataStr, pollingRefresh} from "@/utils/refreshCptData";
export default {
  name: "cpt-dataV-scrollTable",
  title: "滚动表格",
  icon: 'el-icon-s-grid',
  initWidth: 300,
  initHeight: 150,
  group: 'chart',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  data(){
    return {
      config: {},
      uuid: null
    }
  },
  watch: {
    'option.attribute': function() {
      this.refreshCptData()
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
        this.config = JSON.parse(JSON.stringify(this.option.attribute))
        this.config.data = JSON.parse(res);
      });
    }
  }
}
</script>

<style scoped>

</style>
