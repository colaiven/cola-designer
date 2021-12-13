<template>
  <div style="width: 100%;height:100%;text-align: center;">
    <el-carousel :height="height+'px'" :trigger="option.attribute.trigger">
      <el-carousel-item v-for="item in option.attribute.imgUrls" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item" :fit="option.attribute.fit"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "cpt-carousel",
  title: '走马灯',
  icon: 'el-icon-money',
  group:'basic',
  props:{
    height:{type:Number,default:168},
    option:Object
  }
}
</script>

<style scoped>
</style>
