<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="边框样式">
      <el-select v-model="attribute.borderType" placeholder="请选择">
        <el-option v-for="item in borderTypes"
            :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="边框颜色1">
      <el-color-picker v-model="attribute.borderColor1" show-alpha/>
    </el-form-item>
    <el-form-item label="边框颜色2">
      <el-color-picker v-model="attribute.borderColor2" show-alpha/>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker v-model="attribute.backgroundColor" show-alpha/>
    </el-form-item>
    <div v-if="attribute.borderType === 'dv-border-box-8'">
      <el-form-item label="动画时长">
        <el-input-number v-model="attribute.dur" :min="1" :max="60"/>
      </el-form-item>
      <el-form-item label="动画方向">
        <el-select v-model="attribute.reverse" placeholder="请选择">
          <el-option label="逆时针" :value="true"/>
          <el-option label="顺时针" :value="false"/>
        </el-select>
      </el-form-item>
    </div>
    <div v-if="attribute.borderType === 'dv-border-box-11'">
      <el-form-item label="标题">
        <el-input v-model="attribute.borderTitle"/>
      </el-form-item>
      <el-form-item label="标题宽度">
        <el-input-number v-model="attribute.titleWidth" :min="10"/>
      </el-form-item>
    </div>

  </el-form>
</template>

<script>
export default {
  name: "cpt-dataV-border-option",
  props: { attribute: Object },
  data(){
    return {
      borderTypes:[
        { value: 'dv-border-box-1', label: '样式1' },
        { value: 'dv-border-box-2', label: '样式2' },
        { value: 'dv-border-box-3', label: '样式3' },
        { value: 'dv-border-box-4', label: '样式4' },
        { value: 'dv-border-box-5', label: '样式5' },
        { value: 'dv-border-box-6', label: '样式6' },
        { value: 'dv-border-box-7', label: '样式7' },
        { value: 'dv-border-box-8', label: '样式8' },
        { value: 'dv-border-box-9', label: '样式9' },
        { value: 'dv-border-box-10', label: '样式10' },
        { value: 'dv-border-box-12', label: '样式12' },
        { value: 'dv-border-box-13', label: '样式13' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
