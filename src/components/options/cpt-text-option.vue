<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="文本">
        <el-input v-model="option.text"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="option.url"></el-input>
      </el-form-item>
      <el-form-item label="颜色">
        <el-color-picker v-model="option.textColor" show-alpha></el-color-picker>
      </el-form-item>
      <el-form-item label="加粗">
        <el-input v-model="option.textWeight"></el-input>
      </el-form-item>
      <el-form-item label="字体">
        <el-select v-model="option.textFamily">
          <el-option
              v-for="(item,index) in textFamilyList"
              :key="index"
              :label="item"
              :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文字大小">
        <el-select v-model="option.textSize">
          <el-option
              v-for="(item,index) in textSizeList"
              :key="index"
              :label="item"
              :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="行高">
        <el-select v-model="option.textLineWeight">
          <el-option
              v-for="(item,index) in textLineWeightList"
              :key="index"
              :label="item"
              :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-select v-model="option.textAlign">
          <el-option
              v-for="(item,index) in textAlignList"
              :key="index"
              :label="item"
              :value="item">
          </el-option>
        </el-select>
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
      textSizeList: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '84px', '108px', '120px'],
      textLineWeightList: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '84px', '96px'],
      textFamilyList: ['微软雅黑', '黑体', '宋体', '仿宋','楷体','华文宋体'],
      textAlignList: ['left', 'center', 'right'],
    }
  }
}
</script>

<style scoped>

</style>