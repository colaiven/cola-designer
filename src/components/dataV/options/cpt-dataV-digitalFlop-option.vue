<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="格式化">
      <el-input v-model="attribute.content"/>
    </el-form-item>
    <el-form-item label="小数位数">
      <el-input-number :min="0" :max="10" v-model="attribute.toFixedNum"/>
    </el-form-item>
    <el-form-item label="对齐方式">
      <el-select v-model="attribute.textAlign">
        <el-option label="center" value="center"/>
        <el-option label="left" value="left"/>
        <el-option label="right" value="right"/>
      </el-select>
    </el-form-item>
    <el-form-item label="行间距">
      <el-input-number :min="0" :max="300" v-model="attribute.rowGap"/>
    </el-form-item>
    <el-form-item label="字体大小">
      <el-input-number :min="0" :max="100" v-model="attribute.style.fontSize"/>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="attribute.style.fill" show-alpha/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-dataV-digitalFlop-option",
  props: { attribute: Object },
  data(){
    return {
    }
  }
}
</script>

<style scoped>

</style>
