<template>
  <comment :key="refreshFlagKey" :is="option.attribute.decorationType" :style="{width:width+'px',height:height+'px',color: option.attribute.textColor}"
           :color="[option.attribute.color1, option.attribute.color2]" >{{option.attribute.text}}</comment>
</template>

<script>
export default {
  name: "cpt-dataV-decoration",
  title: "炫酷装饰",
  icon: 'decoration',
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
