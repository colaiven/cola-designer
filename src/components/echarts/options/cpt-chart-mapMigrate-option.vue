<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="option.titleText"/>
    </el-form-item>
    <el-form-item label="标题颜色">
      <el-color-picker v-model="option.titleColor" show-alpha/>
    </el-form-item>
    <el-form-item label="标题大小">
      <el-input-number v-model="option.titleFontSize" :min="4" :max="100"/>
    </el-form-item>
    <el-form-item label="副标题">
      <el-input v-model="option.subtext"/>
    </el-form-item>
    <el-form-item label="副标题颜色">
      <el-color-picker v-model="option.subTitleColor" show-alpha/>
    </el-form-item>
    <el-form-item label="副标题大小">
      <el-input-number v-model="option.subTitleFontSize" :min="4" :max="100"/>
    </el-form-item>
    <el-form-item label="说明">
      <el-input v-model="option.seriesName"/>
    </el-form-item>
    <el-form-item label="缩放">
      <el-switch v-model="option.roam" active-text="开" inactive-text="关"/>
    </el-form-item>

    <el-form-item label="路线颜色">
      <el-color-picker v-model="option.seriesColor" show-alpha/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-mapMigrate-option",
  props: {option: Object},
}
</script>

<style scoped>

</style>
