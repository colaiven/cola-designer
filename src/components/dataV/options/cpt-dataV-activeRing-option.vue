<template>
  <el-form label-width="100px" size="mini">
    <el-form-item label="边框粗细">
      <el-input-number v-model="attribute.lineWidth" :min="1" :max="100"/>
    </el-form-item>
    <el-form-item label="半径">
      <el-input-number v-model="attribute.radius" :min="1" :max="100"/>
    </el-form-item>
    <el-form-item label="动态半径">
      <el-input-number v-model="attribute.activeRadius" :min="1" :max="110"/>
    </el-form-item>
    <el-form-item label="显示百分比">
      <el-switch v-model="attribute.showOriginValue" active-text="数值" inactive-text="百分比"/>
    </el-form-item>
    <el-form-item label="颜色">
      <div>
        <div v-for="(item,index) in attribute.color" :key="index" class="colorBlock" :style="{backgroundColor:item}">
          <div class="delTag" @click="delColor(index)">
            <i class="el-icon-delete"></i>
          </div>
        </div>
        <el-color-picker v-model="tempColor" show-alpha @change="addColor"/>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "cpt-dataV-activeRing-option",
  props: { attribute: Object },
  data(){
    return {
      tempColor:''
    }
  },
  methods:{
    addColor(){
      this.attribute.color.push(this.tempColor)
    },
    delColor(index){
      this.attribute.color.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.colorBlock{float: left; width: 25px;height: 25px;margin-right: 2px;}
.colorBlock:hover .delTag{display: inline-block}
.delTag{width: 100%;height: 100%;display: none;text-align: center;font-size: 18px;color: #fff}
</style>
