<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="option.title"/>
    </el-form-item>
    <el-form-item label="副标题">
      <el-input v-model="option.subtext"/>
    </el-form-item>
    <el-form-item label="标题颜色">
      <el-color-picker v-model="option.titleTextColor" show-alpha/>
    </el-form-item>
    <el-form-item label="x轴字体颜色">
      <el-color-picker v-model="option.xLabelColor" show-alpha/>
    </el-form-item>
    <el-form-item label="x轴线颜色">
      <el-color-picker v-model="option.xLineColor" show-alpha/>
    </el-form-item>
    <el-form-item label="y轴字体颜色">
      <el-color-picker v-model="option.yLabelColor" show-alpha/>
    </el-form-item>
    <el-form-item label="y轴颜色">
      <el-color-picker v-model="option.yLineColor" show-alpha/>
    </el-form-item>
    <el-form-item label="y轴网格线">
      <el-switch v-model="option.yGridLineShow" active-text="开" inactive-text="关"/>
    </el-form-item>
    <el-form-item label="y轴刻度线">
      <el-switch v-model="option.yTickShow" active-text="开" inactive-text="关"/>
    </el-form-item>
    <el-form-item label="平滑曲线">
      <el-switch v-model="option.smooth" active-text="开" inactive-text="关"/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-line-option",
  props: {option: Object},
}
</script>

<style scoped>

</style>
