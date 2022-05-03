<template>
  <el-form labelWidth="90px">
    <el-form-item label="标题">
      <el-input v-model="attribute.title" size="small"/>
    </el-form-item>
    <el-form-item label="数值大小">
      <el-input-number :min="13" :max="200" v-model="attribute.numSize"  size="small"/>
    </el-form-item>
    <el-form-item label="数值颜色">
      <el-color-picker v-model="attribute.numColor" size="mini"/>
    </el-form-item>
    <el-form-item label="数值行高">
      <el-input-number :min="10" :max="200" v-model="attribute.numHeight"  size="small"/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-num-option",
  props: {attribute: Object},
}
</script>

<style scoped>

</style>
