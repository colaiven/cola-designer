<template>
  <div style="position: relative">
    <el-form label-width="100px" size="mini">
      <el-form-item label="表头背景色">
        <el-color-picker v-model="attribute.headerBGC" show-alpha/>
      </el-form-item>
      <el-form-item label="奇数行背景色">
        <el-color-picker v-model="attribute.oddRowBGC" show-alpha/>
      </el-form-item>
      <el-form-item label="偶数行背景色">
        <el-color-picker v-model="attribute.evenRowBGC" show-alpha/>
      </el-form-item>
      <el-form-item label="显示行数">
        <el-input-number v-model="attribute.rowNum" :min="1" :max="60"/>
      </el-form-item>
      <el-form-item label="轮播时间间隔ms">
        <el-input-number v-model="attribute.waitTime" :min="200" :max="20000" :step="500"/>
      </el-form-item>
      <el-form-item label="表头高度">
        <el-input-number v-model="attribute.headerHeight" :min="5" :max="1000"/>
      </el-form-item>
      <el-form-item label="行号表头">
        <el-input v-model="attribute.indexHeader"/>
      </el-form-item>
      <el-form-item label="滚动方式">
        <el-select v-model="attribute.carousel" placeholder="请选择">
          <el-option label="单列滚动" value="single"/>
          <el-option label="全表滚动" value="page"/>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-dataV-scrollTable-option",
  props: { attribute: Object },
}
</script>

<style scoped>

</style>
