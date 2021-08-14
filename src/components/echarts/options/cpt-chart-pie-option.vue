<template>
  <div>
    <el-form label-width="100px" size="mini">
      <el-form-item label="标题">
        <el-input v-model="option.chartTitle"/>
      </el-form-item>
      <el-form-item label="标题位置(X)">
        <el-input v-model="option.titleX"/>
      </el-form-item>
      <el-form-item label="标题位置(Y)">
        <el-input v-model="option.titleY"/>
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
      <el-form-item label="图例位置(X)">
        <el-input v-model="option.legendX"/>
      </el-form-item>
      <el-form-item label="图例位置(Y)">
        <el-input v-model="option.legendY"/>
      </el-form-item>
      <el-form-item label="图例布局方式">
        <el-select v-model="option.orient">
          <el-option label="纵向" value="vertical"/>
          <el-option label="横向" value="horizontal"/>
        </el-select>
      </el-form-item>
      <el-form-item label="图例文字颜色">
        <el-color-picker v-model="option.legendTextColor" show-alpha/>
      </el-form-item>
    </el-form>
    <el-form label-position="top">
      <el-form-item label="数据">
        <el-input type="textarea" :rows="4" v-model="option.seriesData"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-chart-pie-option",
  props: { option: Object },
}
</script>

<style scoped>

</style>
