<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="边框粗细">
      <el-input-number :min="1" :max="100" v-model="attribute.borderWidth"/>
    </el-form-item>
    <el-form-item label="边框圆角">
      <el-input-number :min="0" :max="100" v-model="attribute.borderRadius"/>
    </el-form-item>
    <el-form-item label="内边距">
      <el-input-number :min="0" :max="100" v-model="attribute.borderGap"/>
    </el-form-item>
    <el-form-item label="局部渐变">
      <el-switch  v-model="attribute.localGradient"/>
    </el-form-item>
    <el-form-item label="线条粗细">
      <el-input-number :min="0" :max="50" v-model="attribute.lineWidth"/>
    </el-form-item>
    <el-form-item label="线条间隔">
      <el-input-number :min="0" :max="20" v-model="attribute.lineSpace"/>
    </el-form-item>
<!--    <el-form-item label="颜色1">
      <el-color-picker v-model="attribute.colors[0]" show-alpha/>
    </el-form-item>
    <el-form-item label="颜色2">
      <el-color-picker v-model="attribute.colors[1]" show-alpha/>
    </el-form-item>-->
  </el-form>
</template>

<script>
export default {
  name: "cpt-dataV-percentPond-option",
  props: { attribute: Object },
}
</script>

<style scoped>

</style>
