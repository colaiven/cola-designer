<template>
  <dv-scroll-ranking-board :config="config" :style="{width:width+'px',height:height+'px'}" />
</template>

<script>
export default {
  name: "cpt-dataV-scrollList",
  title: "滚动列表",
  icon: 'el-icon-finished',
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
    this.refreshCptData()
  },
  methods:{
    refreshCptData(){
      this.config = JSON.parse(JSON.stringify(this.option))
      this.config.data = JSON.parse(this.option.cptDataForm.dataText)
      if(this.option.cptDataForm.dataSource === 2){//调接口
        this.$message.warning('接口还未实现')
      }
    },
  }
}
</script>

<style scoped>

</style>
