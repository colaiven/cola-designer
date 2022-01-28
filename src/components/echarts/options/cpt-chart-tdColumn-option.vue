<template>
  <div>
    <el-form label-width="100px" size="mini">
      <el-form-item label="标题">
        <el-input v-model="attribute.chartTitle"/>
      </el-form-item>
      <el-form-item label="标题位置(左)">
        <el-input v-model="attribute.titleLeft"/>
      </el-form-item>
      <el-form-item label="标题位置(上)">
        <el-input v-model="attribute.titleTop"/>
      </el-form-item>
      <el-form-item label="标题颜色">
        <el-color-picker v-model="attribute.titleTextColor" show-alpha/>
      </el-form-item>
      <el-form-item label="x轴">
        <el-switch v-model="attribute.xAxisShow" active-text="开" inactive-text="关"/>
      </el-form-item>
      <div v-show="attribute.xAxisShow">
        <el-form-item label="x轴线显示">
          <el-switch v-model="attribute.xLineShow" active-text="开" inactive-text="关"/>
        </el-form-item>
        <el-form-item label="x轴线颜色">
          <el-color-picker v-model="attribute.xLineColor" show-alpha/>
        </el-form-item>
        <el-form-item label="x轴刻度线">
          <el-switch v-model="attribute.xTickShow" active-text="开" inactive-text="关"/>
        </el-form-item>
        <el-form-item label="x轴字体颜色">
          <el-color-picker v-model="attribute.xLabelColor" show-alpha/>
        </el-form-item>
        <el-form-item label="x轴字体倾斜">
          <el-slider v-model="attribute.xFontRotate" :min="-180" :max="180"/>
        </el-form-item>
      </div>
      <el-form-item label="y轴">
        <el-switch v-model="attribute.yAxisShow" active-text="开" inactive-text="关"/>
      </el-form-item>
      <div v-show="attribute.yAxisShow">
        <el-form-item label="y轴线显示">
          <el-switch v-model="attribute.yLineShow" active-text="开" inactive-text="关"/>
        </el-form-item>
        <el-form-item label="y轴颜色">
          <el-color-picker v-model="attribute.yLineColor" show-alpha/>
        </el-form-item>
        <el-form-item label="y轴网格线">
          <el-switch v-model="attribute.yGridLineShow" active-text="开" inactive-text="关"/>
        </el-form-item>
        <el-form-item label="y轴刻度线">
          <el-switch v-model="attribute.yTickShow" active-text="开" inactive-text="关"/>
        </el-form-item>
        <el-form-item label="y轴字体颜色">
          <el-color-picker v-model="attribute.yLabelColor" show-alpha/>
        </el-form-item>
      </div>
      <el-form-item label="颜色渐变">
        <el-switch v-model="attribute.gradualColor" active-text="开" inactive-text="关"/>
      </el-form-item>
      <div v-if="attribute.gradualColor">
        <el-form-item label="柱顶颜色">
          <el-color-picker v-model="attribute.barColor1" show-alpha/>
        </el-form-item>
        <el-form-item label="柱中颜色">
          <el-color-picker v-model="attribute.barColor2" show-alpha/>
        </el-form-item>
        <el-form-item label="柱底颜色">
          <el-color-picker v-model="attribute.barColor3" show-alpha/>
        </el-form-item>
      </div>
      <div v-else>
        <el-form-item label="柱体颜色">
          <el-color-picker v-model="attribute.barColor" show-alpha/>
        </el-form-item>
      </div>
      <el-form-item label="柱体背景" v-show="attribute.barType === 'bar'">
        <el-switch v-model="attribute.barBgShow" active-text="开" inactive-text="关"/>
      </el-form-item>
      <el-form-item label="柱体宽度">
        <el-input-number v-model="attribute.barWidth" :min="1" :max="100"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-chart-tdColumn-option",
  props: {
    attribute: Object
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>
