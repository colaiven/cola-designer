<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="表盘宽度">
      <el-input-number v-model="attribute.axisLineWidth" :min="1" :max="200"/>
    </el-form-item>
    <el-form-item label="表盘字体">
      <el-input-number v-model="attribute.axisLabelSize" :min="5" :max="200"/>
    </el-form-item>
    <el-form-item label="字体边距">
      <el-input-number v-model="attribute.axisLabelDistance" :min="1" :max="100"/>
    </el-form-item>
    <el-form-item label="刻度边距">
      <el-input-number v-model="attribute.splitLineDistance" :min="1" :max="100"/>
    </el-form-item>
    <el-form-item label="时针颜色">
      <el-color-picker v-model="attribute.hourPointerColor" show-alpha/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-clock-option",
  props: { attribute: Object },
}
</script>

<style scoped>

</style>
