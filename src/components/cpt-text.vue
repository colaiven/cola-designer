<template>
  <div :style="{textAlign:option.textAlign,color:option.textColor,fontSize: option.textSize+'px',fontStyle:option.fontStyle,
    fontWeight:option.fontWeight,lineHeight:option.textLineHeight+'px',fontFamily:option.textFamily,
    textDecoration:option.textDecoration}" @click="redirect">
    {{option.text}}
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
  methods: {
    redirect(){
      if (this.option.url){
        window.open(this.option.url)
      }
    }
  },
}
</script>

<style scoped>

</style>
