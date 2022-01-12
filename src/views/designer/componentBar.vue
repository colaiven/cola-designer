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
    <div v-show="currentTab === 0" v-for="group in cptGroupKeys" :key="group.key">
      <div style="line-height: 45px;cursor: pointer;box-shadow: 0 1px 2px #2B3340;" @click="group.opened = !group.opened">
        <div style="display: inline-block;text-indent: 1em;width: 170px;">{{group.name}}</div>
        <div style="display: inline-block;">
          <i :class="group.opened ? 'el-icon-arrow-down':'el-icon-arrow-right'"></i>
        </div>
      </div>
      <el-row :gutter="2" v-show="group.opened">
        <el-col :span="12" v-for="(item,index) in cptGroups[group.key]" :key="item.title+'c'+index">
          <div draggable="true" :config="JSON.stringify(item)" @dragstart="dragStart"
               style="background-color: #3F4B5F;height: 70px;text-align: center;margin-top: 2px;">
            <div style="font-size: 20px;line-height: 40px;"><i :class="item.icon?item.icon:'el-icon-question'"></i>
            </div>
            <div style="font-size: 13px">{{ item.title }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-show="currentTab === 1">
      <div v-show="selectedComponents.length === 0" style="text-align: center;line-height: 50px;">
        无图层
      </div>
      <el-row v-for="(item,index) in selectedComponents" :key="item.keyId" class="selectedItem"
              :style="{background: currentCptIndex === index ? '#3F4B5F':'#353f50'}">
        <el-col :span="4" style="text-align: center"><i :class="item.icon"/></el-col>
        <el-col :span="15" @click.native="showConfigBar(item,index)">{{item.cptTitle}}</el-col>
        <el-col :span="5" style="text-align: center">
          <i class="el-icon-copy-document" @click="copyCpt(item)"/>
          <i style="margin-left: 4px;" class="el-icon-delete" @click="delCpt(item,index)"/>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import cptGroups from '@/components/registerCpt'
import cptOptions from "@/components/options"//重复引入待优化

export default {
  name: "componentBar",
  data() {
    return {
      cptGroups,cptOptions,
      cptGroupKeys:[],
      currentTab:0//0组件，1图层
    }
  },
  props:{
    selectedComponents:Array,
    currentCptIndex:Number
  },
  created() {
    for (let key in cptGroups) {
      this.cptGroupKeys.push({
        key:key,
        name:cptOptions[key].name,
        icon:cptOptions[key].icon,
        opened:cptOptions[key].opened
      })
    }
  },
  methods: {
    dragStart(e) {
      let copyDom = e.currentTarget.cloneNode(true);
      this.$emit('dragStart', copyDom);
    },
    showConfigBar(item,index){
      this.$emit('showConfigBar', item, index);
    },
    copyCpt(item){
      this.$emit('copyCpt', item);
    },
    delCpt(item,index){
      this.$emit('delCpt', item, index);
    }
  },
}
</script>

<style scoped>
.bar{position:relative;width:100%;height:100%;background: #353f50;color: #fff;overflow-x:hidden;overflow-y: auto}
.el-collapse-item__*{background: #353f50}
.topTab{width:200px;height: 45px;text-align: center;line-height: 45px;cursor: pointer;
  position: fixed;z-index: 7;background: #353f50;box-shadow: 0 1px 3px #2b3340;}
.focusTab{background: #3F4B5F}
.selectedItem{line-height: 45px;cursor: pointer;box-shadow: 0 1px 3px #2b3340 inset;}
</style>
