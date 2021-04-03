<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="colDiv" style="height: 232px;line-height: 232px" @click="checkedScreen(1)">3:2</div>
    </el-col>
    <el-col :span="6">
      <div class="colDiv" style="height: 196px;line-height: 196px" @click="checkedScreen(2)">16:9</div>
    </el-col>
    <el-col :span="6">
      <div class="colDiv" style="height: 262px;line-height: 262px" @click="checkedScreen(3)">4:3</div>
    </el-col>
    <el-col :span="6">
      <div class="colDiv" style="width:196px;height: 350px;line-height: 350px" @click="checkedScreen(4)">9:16</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "checkScreen",
  methods:{
    checkedScreen(val){
      this.$emit("checkedScreen",val)
    }
  }
}
</script>

<style scoped>
.colDiv{border: 1px dashed rgba(102, 177, 205, 0.6);margin: 0 auto;text-align: center;
  width: 350px;font-size: 46px;color: #66b1ff}
.colDiv:hover{
  cursor: pointer;
  background: #efefef;
  transform:scale(1.2);
  -webkit-transform:scale(1.2);
  transition:all 0.3s;
  -webkit-transition:all 0.3s;
  -moz-transition:all 0.3s;
  -o-transition:all 0.3s;
}
</style>
