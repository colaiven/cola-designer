<template>
  <div>
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
      <el-form-item label="柱体颜色">
        <el-color-picker v-model="option.barColor" show-alpha/>
      </el-form-item>
      <el-form-item label="柱体背景">
        <el-switch v-model="option.barBgShow" active-text="开" inactive-text="关"/>
      </el-form-item>
      <el-form-item label="圆角">
        <el-input-number v-model="option.barBorderRadius" :min="0" :max="50"/>
      </el-form-item>
      <el-form-item label="柱体宽度">
        <el-input-number v-model="option.barWidth" :min="10" :max="100"/>
      </el-form-item>
    </el-form>
    <el-form label-position="top">
      <el-form-item label="x轴数据">
        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="option.xData"/>
      </el-form-item>
      <el-form-item label="y轴数据">
        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="option.yData"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-chart-column-option",
  props: {
    option: Object
  },
}
</script>

<style scoped>

</style>
