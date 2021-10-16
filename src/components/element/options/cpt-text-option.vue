<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="字体">
        <el-select v-model="option.textFamily">
          <el-option v-for="(item,index) in textFamilyList" :key="index+item" :label="item" :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item label="颜色">
        <el-color-picker v-model="option.textColor" show-alpha></el-color-picker>
      </el-form-item>
      <el-form-item label="加粗">
        <el-select v-model="option.fontWeight">
          <el-option label="更细" value="lighter"/>
          <el-option label="正常" value="normal"/>
          <el-option label="加粗" value="bold"/>
          <el-option label="更粗(存在兼容问题)" value="bolder"/>
        </el-select>
      </el-form-item>
      <el-form-item label="倾斜">
        <el-select v-model="option.fontStyle">
          <el-option label="正常" value="normal"/>
          <el-option label="斜体" value="italic"/>
          <el-option label="倾斜" value="oblique"/>
        </el-select>
      </el-form-item>
      <el-form-item label="文字大小">
        <el-input-number :min="13" :max="200" v-model="option.textSize" style="width: 100%"/>
      </el-form-item>
      <el-form-item label="行高">
        <el-input-number :min="13" :max="250" v-model="option.textLineHeight" style="width: 100%"/>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-select v-model="option.textAlign">
          <el-option v-for="(item,index) in textAlignList" :key="index+item" :label="item" :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item label="下划线">
        <el-select v-model="option.textDecoration">
          <el-option v-for="(item,index) in textDecorationList" :key="index+item.label" :label="item.label" :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="跳转链接">
        <el-input v-model="option.url"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-text-option",
  props: {
    option: Object
  },
  data() {
    return {
      textFamilyList: ['微软雅黑', '黑体', '宋体', '仿宋','楷体','华文宋体'],
      textAlignList: ['left', 'center', 'right'],
      textDecorationList: [{label:'无',value:'none'},{label:'下划线',value:'underline'},{label:'上划线',value:'overline'},
        {label:'穿过文字',value:'line-through'},{label:'闪烁(存在兼容问题)',value:'blink'}]
    }
  }
}
</script>

<style scoped>

</style>
