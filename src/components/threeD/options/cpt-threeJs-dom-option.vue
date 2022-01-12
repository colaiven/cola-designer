<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="相机X">
      <el-input-number v-model="attribute.cameraX" :min="-180" :max="180"/>
    </el-form-item>
    <el-form-item label="相机Y">
      <el-input-number v-model="attribute.cameraY" :min="-180" :max="180"/>
    </el-form-item>
    <el-form-item label="相机Z">
      <el-input-number v-model="attribute.cameraZ" :min="-180" :max="180"/>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker v-model="attribute.bgColor"/>
    </el-form-item>
    <el-form-item label="背景透明度">
      <el-input-number v-model="attribute.bgAlpha" :step="0.1" :min="0" :max="1"/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-threeJs-dom-option",
  props: {
    attribute: Object
  },
}
</script>

<style scoped>

</style>
