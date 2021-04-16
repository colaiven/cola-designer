<template>
  <el-row style="width:100%;height:100%;background: #49586E;z-index: 2000;color: #fff">
    <el-row class="cptTitle">组件库</el-row>
    <el-row style="height: 350px;width: 100%;overflow: auto">
      <el-col :span="8" v-for="(item,index) in listComponent" :key="item.name"
              style="height: 70px;text-align: center;border-bottom: 1px solid #2b3340;"
              :style="(index+1)%3!==0?'border-right: 1px solid #2b3340':''">
        <div draggable="true" :config="JSON.stringify(item)" @dragstart="dragStart">
          <div style="font-size: 20px;line-height: 40px;"><i :class="item.icon?item.icon:'el-icon-question'"></i>
          </div>
          <div>{{ item.name }}</div>
        </div>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import listComponent from '@/components/registerCpt'

export default {
  name: "componentBar",
  data() {
    return {
      listComponent,
    }
  },
  methods: {
    dragStart(e) {
      let copyDom = e.currentTarget.cloneNode(true);
      this.$emit('dragStart', copyDom);
    }
  },
}
</script>

<style scoped>
.cptTitle {line-height: 45px;text-align: center;background: #3F4B5F;}
.cptTitle:hover {cursor: move}
</style>
