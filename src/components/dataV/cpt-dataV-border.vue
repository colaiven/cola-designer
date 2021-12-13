<template>
  <comment :is="option.attribute.borderType" :style="{width:width+'px',height:height+'px'}"
           :color="[option.attribute.borderColor1, option.attribute.borderColor2]" :backgroundColor="option.attribute.backgroundColor"
           :title="option.attribute.borderTitle" :titleWidth="option.attribute.titleWidth"
           :dur="option.attribute.dur" :reverse="option.attribute.reverse"/>
<!--  默认宽高为100%（http://datav.jiaminghi.com/guide/borderBox.html），会出现滚动条常驻现象 -->
</template>

<script>
export default {
  name: "cpt-dataV-border",
  title: "边框",
  icon: 'el-icon-help',
  initWidth: 256,
  initHeight: 191,
  group: 'basic',
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
