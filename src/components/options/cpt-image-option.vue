<template>
  <div>
    <el-form label-width="80px" size="mini">
      <el-form-item label="图片">
        <el-input v-model="option.url"></el-input>
      </el-form-item>
      <el-form-item label="填充方式">
        <el-select v-model="option.fit" placeholder="请选择填充方式">
          <el-option label="fill" value="fill"/>
          <el-option label="contain" value="contain"/>
          <el-option label="cover" value="cover"/>
          <el-option label="none" value="none"/>
          <el-option label="scale-down" value="scale-down"/>
        </el-select>
      </el-form-item>
      <el-form-item label="点击放大">
        <el-radio-group v-model="option.preview">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-image-option",
  props: {option: Object},
}
</script>

<style scoped>

</style>
