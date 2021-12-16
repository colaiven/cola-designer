<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="attribute.titleText"/>
    </el-form-item>
    <el-form-item label="标题颜色">
      <el-color-picker v-model="attribute.titleColor" show-alpha/>
    </el-form-item>
    <el-form-item label="标题大小">
      <el-input-number v-model="attribute.titleFontSize" :min="4" :max="100"/>
    </el-form-item>
    <el-form-item label="副标题">
      <el-input v-model="attribute.subtext"/>
    </el-form-item>
    <el-form-item label="副标题颜色">
      <el-color-picker v-model="attribute.subTitleColor" show-alpha/>
    </el-form-item>
    <el-form-item label="副标题大小">
      <el-input-number v-model="attribute.subTitleFontSize" :min="4" :max="100"/>
    </el-form-item>
    <el-form-item label="标题位置(左)">
      <el-input v-model="attribute.titleLeft"/>
    </el-form-item>
    <el-form-item label="标题位置(上)">
      <el-input v-model="attribute.titleTop"/>
    </el-form-item>
    <el-form-item label="说明">
      <el-input v-model="attribute.seriesName"/>
    </el-form-item>
    <el-form-item label="缩放">
      <el-switch v-model="attribute.roam" active-text="开" inactive-text="关"/>
    </el-form-item>

    <el-form-item label="路线颜色">
      <el-color-picker v-model="attribute.seriesColor" show-alpha/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-mapMigrate-option",
  props: {attribute: Object},
}
</script>

<style scoped>

</style>
