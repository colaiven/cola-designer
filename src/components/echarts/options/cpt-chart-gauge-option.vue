<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="attribute.title"/>
    </el-form-item>
    <el-form-item label="标题字体">
      <el-input-number v-model="attribute.titleSize" :min="1" :max="100" :step="1"/>
    </el-form-item>
    <el-form-item label="标题颜色">
      <el-color-picker v-model="attribute.titleColor"/>
    </el-form-item>
    <el-form-item label="最小值">
      <el-input-number v-model="attribute.min"/>
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number v-model="attribute.max"/>
    </el-form-item>
    <el-form-item label="起始角度">
      <el-slider v-model="attribute.startAngle" :min="-360" :max="360" :step="1"/>
    </el-form-item>
    <el-form-item label="结束角度">
      <el-slider v-model="attribute.endAngle" :min="-360" :max="360" :step="1"/>
    </el-form-item>
    <el-form-item label="表盘宽度">
      <el-input-number v-model="attribute.lineWidth" :min="1" :max="100" :step="1"/>
    </el-form-item>
    <el-form-item label="表盘颜色1">
      <el-color-picker v-model="attribute.color1"/>
    </el-form-item>
    <el-form-item label="表盘颜色2">
      <el-color-picker v-model="attribute.color2"/>
    </el-form-item>
    <el-form-item label="表盘颜色3">
      <el-color-picker v-model="attribute.color3"/>
    </el-form-item>
    <el-form-item label="刻度边距">
      <el-input-number v-model="attribute.lineDistance" :min="-10" :max="100" :step="1"/>
    </el-form-item>
    <el-form-item label="刻度长度">
      <el-input-number v-model="attribute.tickLength" :min="1" :max="100" :step="1"/>
    </el-form-item>
    <el-form-item label="刻度值边距">
      <el-input-number v-model="attribute.labelDistance" :min="-10" :max="100" :step="1"/>
    </el-form-item>
    <el-form-item label="刻度字体">
      <el-input-number v-model="attribute.labelSize" :min="1" :max="100" :step="1"/>
    </el-form-item>
    <el-form-item label="指针长度">
      <el-input-number v-model="attribute.pointerLength" :min="1" :max="120" :step="1"/>
    </el-form-item>
    <el-form-item label="指针宽度">
      <el-input-number v-model="attribute.pointerWidth" :min="1" :max="120" :step="1"/>
    </el-form-item>
    <el-form-item label="指针颜色">
      <el-color-picker v-model="attribute.itemColor"/>
    </el-form-item>
    <el-form-item label="数值字体">
      <el-input-number v-model="attribute.detailSize" :min="2" :max="120" :step="1"/>
    </el-form-item>
    <el-form-item label="数值颜色">
      <el-color-picker v-model="attribute.detailColor"/>
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
