<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="文本">
        <el-input v-model="option.text"/>
      </el-form-item>
      <el-form-item label="跳转路径">
        <el-input v-model="option.url"/>
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker v-model="option.bgColor" show-alpha/>
      </el-form-item>
      <el-form-item label="文本颜色">
        <el-color-picker v-model="option.textColor" show-alpha/>
      </el-form-item>
      <el-form-item label="圆角">
        <el-input-number v-model="option.radius" :min="0" :max="500"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-button-option",
  props:{option:Object},
  data(){
    return{

    }
  },
}
</script>

<style scoped>

</style>
