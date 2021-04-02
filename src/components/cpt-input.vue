<template>
  <div>
    <el-form :model="option" :rel="option" style="width: 100%">
      <el-form-item :style="{textAlign:option.textAlign}">
        <span style="display: inline-block">{{ option.label }}：</span>
        <el-input style="display: inline-block;" :style="{width:option.inputWidth}" v-model="option.value"
                  :type="option.type" :placeholder="option.placeholderValue"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-input",
  text: '输入框',
  icon: 'el-icon-edit-outline',
  initWidth: 200,
  initHeight: 100,
  props: {
    option: Object
  },
}
</script>

<style scoped>

</style>
