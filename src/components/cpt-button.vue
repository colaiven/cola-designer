<template>
  <div style="height: 100%">
    <el-button style="width: 100%;height: 100%" @click="redirect()"
          :style="{background:option.bgColor,color:option.textColor,
              borderRadius:option.radius+'px'}">
      {{option.text}}
    </el-button>
  </div>
</template>

<script>
export default {
  name: "cpt-button",
  title: "按钮",
  icon: 'el-icon-thumb',
  initWidth: 150,
  initHeight:40,
  group:'element',
  props:{option:Object},
  methods:{
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
