<template>
  <div style="width: 100%; height: 100%">
    <el-image style="width: 100%; height: 100%"
        :preview-src-list="option.attribute.preview ? [option.attribute.url]:[]"
        :src="option.attribute.url" :fit="option.attribute.fit"/>
  </div>
</template>

<script>
export default {
  name: "cpt-image",
  title: '图片',
  icon: 'el-icon-picture-outline',
  group:'basic',
  props: {option: Object},
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>
