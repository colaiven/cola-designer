<template>
  <div :id="uuid"></div>
</template>

<script>
export default {
  name: "cpt-chart-column",
  title: "按钮",
  icon: 'el-icon-thumb',
  initWidth: 400,
  initHeight: 300,
  group: 'echarts',
  props:{option:Object},
  data(){
    return {
      uuid:''
    }
  },
  created() {
    this.uuid = require('uuid');
    console.log()
  }
}
</script>

<style scoped>

</style>
