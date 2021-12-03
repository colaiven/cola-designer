<template>
  <comment :key="refreshFlagKey" :is="option.decorationType" :style="{width:width+'px',height:height+'px',color: option.textColor}"
           :color="[option.color1, option.color2]" >{{option.text}}</comment>
</template>

<script>
export default {
  name: "cpt-dataV-decoration",
  title: "炫酷装饰",
  icon: 'el-icon-magic-stick',
  initWidth: 256,
  initHeight: 191,
  group: 'basic',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  watch: {
    option: {
      handler() {
        this.refreshFlagKey = require('uuid').v1();//强制刷新视图
      },
      deep: true//深度监听
    },
    width(){
      this.refreshFlagKey = require('uuid').v1();
    }
  },
  data() {
    return {
      refreshFlagKey: require('uuid').v1()
    }
  }
}
</script>

<style scoped>

</style>
