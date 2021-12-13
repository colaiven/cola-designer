<template>
  <div>
    <el-form :label-position="option.attribute.labelPosition" :label-width="option.attribute.labelWidth+'px'" :size="option.attribute.formSize">
      <el-form-item :label="option.attribute.label">
        <el-input v-model="option.attribute.value" :type="option.attribute.type" :placeholder="option.attribute.placeholderValue"/>
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
  initHeight: 50,
  group:'basic',
  props: {
    option: Object
  },
}
</script>

<style scoped>

</style>
