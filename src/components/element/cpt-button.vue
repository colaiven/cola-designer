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
      cptData: ''
    }
  },
  created() {
    this.refreshCptData();
  },
  methods:{
    refreshCptData(){
      this.cptData = this.option.cptDataForm.dataText
      if(this.option.cptDataForm.dataSource === 2){//调接口
        this.$message.warning('接口还未实现')
      }
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
