<template>
  <div style="width: 100%; height: 100%">
    <el-image style="width: 100%; height: 100%"
        :preview-src-list="option.attribute.preview ? [option.attribute.url]:[]"
        :src="option.attribute.url?fileUrl+option.attribute.url:require('@/assets/logo.png')" :fit="option.attribute.fit"/>
  </div>
</template>

<script>
import {fileUrl} from "/env";

export default {
  name: "cpt-image",
  title: '图片',
  icon: 'el-icon-picture-outline',
  group:'basic',
  props: {option: Object},
  data() {
    return {
      fileUrl:fileUrl,
    }
  }
}
</script>

<style scoped>
</style>
