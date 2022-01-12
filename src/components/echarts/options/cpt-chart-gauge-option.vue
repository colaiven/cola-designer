<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="attribute.title"/>
    </el-form-item>
    <el-form-item label="表盘宽度">
      <el-input-number v-model="attribute.lineWidth" :min="1" :max="100"/>
    </el-form-item>
    <el-form-item label="颜色1">
      <el-color-picker v-model="attribute.color1"/>
    </el-form-item>
    <el-form-item label="颜色2">
      <el-color-picker v-model="attribute.color2"/>
    </el-form-item>
    <el-form-item label="颜色3">
      <el-color-picker v-model="attribute.color3"/>
    </el-form-item>
    <el-form-item label="进度颜色">
      <el-color-picker v-model="attribute.itemColor"/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-gauge-option",
  props: {attribute: Object},
}
</script>

<style scoped>

</style>
