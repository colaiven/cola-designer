<template>
  <div>
<!--    组件内部没有设置deep监听props，数据变更时，请生成新的props，不然组件将无法刷新状态-->
    <dv-scroll-board :config="config" :style="{width:width+'px',height:height+'px'}" />
  </div>

</template>

<script>
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
      config: []
    }
  },
  watch: {
    'option.refresh': function() {
      this.refreshCptData()
    }
  },
  created() {
    this.refreshCptData();
  },
  methods:{
    refreshCptData(){
      this.config = JSON.parse(JSON.stringify(this.option))
      this.config.data = JSON.parse(this.option.cptDataForm.dataText)
      if(this.option.cptDataForm.dataSource === 2){//调接口
        this.$message.warning('接口还未实现')
      }
    }
  }
}
</script>

<style scoped>

</style>
