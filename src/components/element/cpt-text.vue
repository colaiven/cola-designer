<template>
  <div :style="{textAlign:option.textAlign,color:option.textColor,fontSize: option.textSize+'px',fontStyle:option.fontStyle,
    fontWeight:option.fontWeight,lineHeight:option.textLineHeight+'px',fontFamily:option.textFamily,
    textDecoration:option.textDecoration}" @click="redirect">
    {{cptData}}
  </div>
</template>

<script>
import httpUtil from "@/utils/httpUtil";
export default {
  name: "cpt-text",
  title: '文字框',
  icon: 'el-icon-chat-line-square',
  initWidth: 150,
  initHeight: 30,
  group:'basic',
  props: {
    option: Object
  },
  data() {
    return {
      cptData: ''
    }
  },
  created() {
    this.refreshCptData();
  },
  methods: {
    refreshCptData(){
      const that = this;
      const iptStr = that.option.cptDataForm.dataText;
      if (that.option.cptDataForm.dataSource === 1){
        that.cptData = iptStr;
      }else if(that.option.cptDataForm.dataSource === 2){//调接口
        if (!iptStr){
          this.$message.error("接口地址不能为空");
          return;
        }
        httpUtil.doRequest(iptStr,'get').then(res => {
          that.cptData = res.data;
        })
      }else if(that.option.cptDataForm.dataSource === 3){
        this.$message.warning("sql方式待实现")
      }
    },
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
