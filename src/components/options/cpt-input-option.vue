<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="名称">
        <el-input v-model="option.label"></el-input>
      </el-form-item>
      <el-form-item label="提示内容">
        <el-input v-model="option.placeholderValue"></el-input>
      </el-form-item>
      <el-form-item label="输入框的值">
        <el-input v-model="option.value" :type="option.type"></el-input>
      </el-form-item>
      <el-form-item label="输入框宽度">
        <el-input v-model="option.inputWidth"></el-input>
      </el-form-item>
      <el-form-item label="输入类型">
        <el-select v-model="option.type">
          <el-option v-for="(item,index) in typeList"
              :key="index" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-select v-model="option.textAlign">
          <el-option v-for="(item,index) in textAlignList"
              :key="index" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-input-option",
  props: {
    option: Object
  },
  data() {
    return {
      typeList: ['text', 'password'],
      textAlignList: ['left', 'center', 'right'],
    }
  }
}
</script>

<style scoped>

</style>
