<template>
  <div style="width: 100%; height: 100%">
    <el-image style="width: 100%; height: 100%"
        :preview-src-list="option.preview ? [option.url]:[]"
        :src="option.url" :fit="option.fit"/>
  </div>
</template>

<script>
export default {
  name: "cpt-image",
  text: '图片',
  icon: 'el-icon-picture-outline',
  props: {option: Object},
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
