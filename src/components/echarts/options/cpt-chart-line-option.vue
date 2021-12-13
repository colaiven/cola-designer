<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="attribute.title"/>
    </el-form-item>
    <el-form-item label="副标题">
      <el-input v-model="attribute.subtext"/>
    </el-form-item>
    <el-form-item label="标题颜色">
      <el-color-picker v-model="attribute.titleTextColor" show-alpha/>
    </el-form-item>
    <el-form-item label="x轴字体颜色">
      <el-color-picker v-model="attribute.xLabelColor" show-alpha/>
    </el-form-item>
    <el-form-item label="x轴线颜色">
      <el-color-picker v-model="attribute.xLineColor" show-alpha/>
    </el-form-item>
    <el-form-item label="y轴字体颜色">
      <el-color-picker v-model="attribute.yLabelColor" show-alpha/>
    </el-form-item>
    <el-form-item label="y轴颜色">
      <el-color-picker v-model="attribute.yLineColor" show-alpha/>
    </el-form-item>
    <el-form-item label="y轴网格线">
      <el-switch v-model="attribute.yGridLineShow" active-text="开" inactive-text="关"/>
    </el-form-item>
    <el-form-item label="y轴刻度线">
      <el-switch v-model="attribute.yTickShow" active-text="开" inactive-text="关"/>
    </el-form-item>
    <el-form-item label="平滑曲线">
      <el-switch v-model="attribute.smooth" active-text="开" inactive-text="关"/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-line-option",
  props: {attribute: Object},
}
</script>

<style scoped>

</style>
