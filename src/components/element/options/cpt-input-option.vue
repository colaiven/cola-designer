<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="名称">
        <el-input v-model="option.label"></el-input>
      </el-form-item>
      <el-form-item label="label宽度">
        <el-input-number v-model="option.labelWidth" min="20" max="1500"/>
      </el-form-item>
      <el-form-item label="提示内容">
        <el-input v-model="option.placeholderValue"></el-input>
      </el-form-item>
      <el-form-item label="默认值">
        <el-input v-model="option.value"></el-input>
      </el-form-item>
      <el-form-item label="输入类型">
        <el-select v-model="option.type">
          <el-option v-for="(item,index) in typeList" :key="index" :label="item" :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-select v-model="option.labelPosition">
          <el-option v-for="(item,index) in labelPositionList"
              :key="index" :label="item" :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="尺寸">
        <el-select v-model="option.formSize">
          <el-option v-for="(item,index) in formSizeList" :key="index" :label="item" :value="item">
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
      labelPositionList: ['left', 'top', 'right'],
      formSizeList:['mini','small','medium']
    }
  }
}
</script>

<style scoped>

</style>
