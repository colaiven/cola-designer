<template>
  <el-row class="bar">
    <el-row class="topTab">
      <el-col :span="12" :class="currentTab === 1 ? 'focusTab':''">
        <div @click="currentTab = 0">组件</div>
      </el-col>
      <el-col :span="12" :class="currentTab === 0 ? 'focusTab':''">
        <div @click="currentTab = 1">图层</div>
      </el-col>
    </el-row>
    <div style="height: 45px;"></div>
    <div v-show="currentTab === 0" v-for="group in options" :key="group.name">
      <div style="line-height: 45px;cursor: pointer;box-shadow: 0 1px 2px #2B3340;" @click="group.opened = !group.opened">
        <div style="display: inline-block;text-indent: 1em;width: 170px;">{{group.name}}</div>
        <div style="display: inline-block;">
          <i :class="group.opened ? 'el-icon-arrow-down':'el-icon-arrow-right'"></i>
        </div>
      </div>
      <el-row :gutter="2" v-show="group.opened">
        <el-col :span="12" v-for="(item,index) in group.children" :key="item.name+index">
          <div draggable="true" :config="JSON.stringify(item)" @dragstart="dragStart"
               style="background-color: #3F4B5F;height: 70px;text-align: center;margin-top: 2px;">
            <div style="line-height: 40px;">
              <embed v-if="item.icon" style="width: 20px;" :src="require('@/assets/icon/'+item.icon+'.svg')" type="image/svg+xml" />
              <i v-else style="font-size: 20px;" class="el-icon-question"></i>
            </div>
            <div style="font-size: 13px">{{ item.name }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-show="currentTab === 1">
      <div v-show="selectedComponents.length === 0" style="text-align: center;line-height: 50px;">
        无图层
      </div>
      <div v-for="(item,index) in selectedComponents" :key="item.keyId" class="selectedItem"
              :style="{background: currentCptIndex === index ? '#3F4B5F':'#353f50'}"
           :draggable="true" @dragstart="layerDragStart(index)" @dragover.prevent @drop="layerOnDrop(index)"
           @mousedown="showConfigBar($event,item,index)">
        {{item.cptTitle}}
        <div style="position: absolute;height: 100%;right: 0;top:0">
          <i class="el-icon-copy-document" @click="copyCpt(item)"/>
          <i style="margin-left: 4px;" class="el-icon-delete" @click="delCpt(item,index)"/>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
import options from '@/components/options'

export default {
  name: "componentBar",
  data() {
    return {
      options,
      cptGroupKeys:[],
      currentTab:0,//0组件，1图层
      draggedIndex:null
    }
  },
  props:{
    selectedComponents:Array,
    currentCptIndex:Number
  },
  methods: {
    dragStart(e) {
      let copyDom = e.currentTarget.cloneNode(true);
      this.$emit('dragStart', copyDom);
    },
    showConfigBar(e,item,index){
      this.$emit('showConfigBar', e, item, index);
    },
    copyCpt(item){
      this.$emit('copyCpt', item);
    },
    delCpt(item,index){
      this.$emit('delCpt', item, index);
    },
    layerDragStart(index){
      this.draggedIndex = index;
    },
    layerOnDrop(index){
      this.$emit('layerOnDrop',this.draggedIndex, index);
      this.draggedIndex = null;
    },
  },
}
</script>

<style scoped>
.bar{position:relative;width:100%;height:100%;background: #353f50;color: #fff;overflow-x:hidden;overflow-y: auto}
.el-collapse-item__*{background: #353f50}
.topTab{width:200px;height: 45px;text-align: center;line-height: 45px;cursor: pointer;
  position: fixed;z-index: 7;background: #353f50;box-shadow: 0 1px 3px #2b3340;}
.focusTab{background: #3F4B5F}
.selectedItem{line-height: 45px;cursor: move;box-shadow: 0 1px 3px #2b3340 inset;display: flex;position: relative;padding-left: 10px}
</style>
