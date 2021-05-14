<template>
  <div>
    <el-form :label-position="option.labelPosition" :label-width="option.labelWidth+'px'" :size="option.formSize">
      <el-form-item :label="option.label">
        <el-input v-model="option.value" :type="option.type" :placeholder="option.placeholderValue"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-input",
  title: '输入框',
  icon: 'el-icon-edit-outline',
  initWidth: 200,
  initHeight: 100,
  group:'element',
  props: {
    option: Object
  },
}
</script>

<style scoped>

</style>
