<template>
  <div :style="{textAlign:option.textAlign}">
    <span
        :style="{color:option.textColor,fontSize: option.textSize,fontWeight:option.textWeight,lineHeight:option.textLineWeight,fontFamily:option.textFamily}">{{
        option.text
      }}</span>
  </div>
</template>

<script>
export default {
  name: "cpt-text",
  text: '文字框',
  icon: 'el-icon-chat-line-square',
  initWidth: 300,
  initHeight: 50,
  props: {
    option: Object
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>

</style>
