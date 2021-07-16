<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="option.chartTitle"/>
    </el-form-item>
    <el-form-item label="标题位置(左)">
      <el-input v-model="option.titleLeft"/>
    </el-form-item>
    <el-form-item label="标题位置(上)">
      <el-input v-model="option.titleTop"/>
    </el-form-item>
    <el-form-item label="标题大小">
      <el-input-number v-model="option.titleFontSize" :min="10" :max="50"/>
    </el-form-item>
    <el-form-item label="标题颜色">
      <el-color-picker v-model="option.titleTextColor" show-alpha/>
    </el-form-item>
    <el-form-item label="副标题">
      <el-input v-model="option.subtext"/>
    </el-form-item>
    <el-form-item label="图例布局方式">
      <el-input v-model="option.orient"/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-pie-option",
  props: {
    option: Object
  },
}
</script>

<style scoped>

</style>
