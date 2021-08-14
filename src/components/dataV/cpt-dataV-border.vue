<template>
  <comment :is="option.borderType" :style="{width:width+'px',height:height+'px'}"
           :color="[option.borderColor1, option.borderColor2]" :backgroundColor="option.backgroundColor"
           :title="option.borderTitle" :titleWidth="option.titleWidth"
           :dur="option.dur" :reverse="option.reverse"/>
<!--  默认宽高为100%（http://datav.jiaminghi.com/guide/borderBox.html），会出现滚动条常驻现象 -->
</template>

<script>
export default {
  name: "cpt-dataV-border",
  title: "边框",
  icon: 'el-icon-help',
  initWidth: 256,
  initHeight: 191,
  group: 'element',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
