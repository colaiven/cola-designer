<template>
  <div style="width: 100%;height:100%;text-align: center;">
    <el-carousel :height="height+'px'">
      <el-carousel-item v-for="item in option.url" :key="item" :trigger="option.trigger">
        <img width="100%" :src="item" alt="" fit="cover">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "cpt-carousel",
  title: '走马灯',
  icon: 'el-icon-money',
  initWidth: 400,
  initHeight: 200,
  group:'element',
  props:{
    height:{type:Number,default:200},
    option:Object
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
