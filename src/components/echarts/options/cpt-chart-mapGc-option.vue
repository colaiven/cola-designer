<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="option.titleText"/>
    </el-form-item>
    <el-form-item label="标题颜色">
      <el-color-picker v-model="option.titleColor" show-alpha/>
    </el-form-item>
    <el-form-item label="标题大小">
      <el-input-number v-model="option.titleFontSize" :min="4" :max="100"/>
    </el-form-item>
    <el-form-item label="副标题">
      <el-input v-model="option.subtext"/>
    </el-form-item>
    <el-form-item label="副标题颜色">
      <el-color-picker v-model="option.subTitleColor" show-alpha/>
    </el-form-item>
    <el-form-item label="副标题大小">
      <el-input-number v-model="option.subTitleFontSize" :min="4" :max="100"/>
    </el-form-item>
    <el-form-item label="说明">
      <el-input v-model="option.seriesName"/>
    </el-form-item>
    <el-form-item label="地图字颜色">
      <el-color-picker v-model="option.geoLabelColor" show-alpha/>
    </el-form-item>
    <el-form-item label="地图字大小">
      <el-input-number v-model="option.geoLabelSize" :min="4" :max="100"/>
    </el-form-item>
    <el-form-item label="允许缩放">
      <el-switch v-model="option.roam" active-text="开" inactive-text="关"/>
    </el-form-item>
    <el-form-item label=">100文字">
      <el-input v-model="option.piecesLabel1"/>
    </el-form-item>
    <el-form-item label=">100颜色">
      <el-color-picker v-model="option.piecesColor1" show-alpha/>
    </el-form-item>
    <el-form-item label="10 - 100文字">
      <el-input v-model="option.piecesLabel2"/>
    </el-form-item>
    <el-form-item label="10-100颜色">
      <el-color-picker v-model="option.piecesColor2" show-alpha/>
    </el-form-item>
    <el-form-item label="1-9文字">
      <el-input v-model="option.piecesLabel3"/>
    </el-form-item>
    <el-form-item label="1-9颜色">
      <el-color-picker v-model="option.piecesColor3" show-alpha/>
    </el-form-item>
    <el-form-item label="0-1文字">
      <el-input v-model="option.piecesLabel4"/>
    </el-form-item>
    <el-form-item label="0-1颜色">
      <el-color-picker v-model="option.piecesColor4" show-alpha/>
    </el-form-item>
    <el-form-item label="0文字">
      <el-input v-model="option.piecesLabel5"/>
    </el-form-item>
    <el-form-item label="0颜色">
      <el-color-picker v-model="option.piecesColor5" show-alpha/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-chart-mapGc-option",
  props: {option: Object},
}
</script>

<style scoped>

</style>
