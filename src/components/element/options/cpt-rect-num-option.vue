<template>
  <el-form label-width="90px" size="mini">
    <el-form-item label="文字大小">
      <el-input-number :min="13" :max="200" v-model="attribute.fontSize" style="width: 100%"/>
    </el-form-item>
    <el-form-item label="文字颜色">
      <el-color-picker v-model="attribute.color" size="mini"/>
    </el-form-item>
    <el-form-item label="边距">
      <el-input-number :min="1" :max="200" v-model="attribute.padding" style="width: 100%"/>
    </el-form-item>
    <el-form-item label="边框颜色">
      <el-color-picker v-model="attribute.borderColor" size="mini"/>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker v-model="attribute.bgColor" size="mini" show-alpha/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-rect-num-option",
  props: {
    attribute: Object
  },
}
</script>

<style scoped>

</style>
