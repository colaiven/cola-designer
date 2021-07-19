<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="表盘宽度">
      <el-input-number v-model="option.axisLineWidth"/>
    </el-form-item>
    <el-form-item label="表盘字体">
      <el-input-number v-model="option.axisLabelSize"/>
    </el-form-item>
    <el-form-item label="时针颜色">
      <el-color-picker v-model="option.hourPointerColor" show-alpha/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-clock-option",
  props: { option: Object },
}
</script>

<style scoped>

</style>
