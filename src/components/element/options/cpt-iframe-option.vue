<template>
  <el-form label-width="80px" size="mini">
    <el-form-item label="url">
      <el-input v-model="attribute.url"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-iframe-option",
  props: {attribute: Object},
}
</script>

<style scoped>

</style>
