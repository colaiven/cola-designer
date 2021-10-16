<template>
  <div style="position: relative">
    <div style="position: fixed;margin: 0 160px;z-index: 8">
      <el-button size="mini" type="primary" @click="option.refresh = !option.refresh">手动刷新</el-button>
    </div>
    <el-form label-width="100px" size="mini">
      <el-form-item label="颜色1">
        <el-color-picker v-model="tempColor1" show-alpha @change="changeColor"/>
      </el-form-item>
      <el-form-item label="颜色2">
        <el-color-picker v-model="tempColor2" show-alpha @change="changeColor"/>
      </el-form-item>
      <el-form-item label="样式">
        <el-select v-model="option.shape" placeholder="请选择">
          <el-option label="矩形" value="rect"/>
          <el-option label="圆角矩形" value="roundRect"/>
          <el-option label="圆形" value="round"/>
        </el-select>
      </el-form-item>
      <el-form-item label="波浪数量">
        <el-input-number v-model="option.waveNum" :min="1"/>
      </el-form-item>
      <el-form-item label="波浪高度">
        <el-input-number v-model="option.waveHeight" :min="1"/>
      </el-form-item>
      <el-form-item label="波浪透明度">
        <el-input-number v-model="option.waveOpacity" :min="0" :max="2"/>
      </el-form-item>
      <el-form-item label="信息格式化">
        <el-input type="textarea" v-model="option.formatter"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-dataV-waterLevel-option",
  props: { option: Object },
  data(){
    return {
      tempColor1: '#00BAFF',
      tempColor2: '#3DE7C9',
    }
  },
  methods:{
    changeColor(){
      this.option.colors = [this.tempColor1,this.tempColor2]
      this.option.refresh = !this.option.refresh
    }
  }
}
</script>

<style scoped>

</style>
