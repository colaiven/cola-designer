<template>
  <el-row style="width:100%;height:100%;background: #49586E;z-index: 2000;color: #fff;overflow: auto">
    <el-row class="cptTitle">组件库</el-row>
    <div v-for="group in cptGroupKeys" :key="group">
      <div style="line-height: 40px" class="hoverPointer" @click="checkGroup(group)">
        <div style="display: inline-block;text-indent: 1em;width: 170px;">{{group}}</div>
        <div style="display: inline-block;">
          <i :class=" openedKey === group ? 'el-icon-arrow-down':'el-icon-arrow-right'"></i>
        </div>
      </div>
      <el-row style="border: 1px solid #2b3340" v-show="openedKey === group">
        <el-col :span="8" v-for="(item,index) in cptGroups[group]" :key="item.name"
                style="height: 70px;text-align: center;"
                :style="{borderRight:(index+1)%3!==0 ? '1px solid #3F4B5F':''
                ,borderBottom:index > cptGroups['element'].length-3 ? '':'1px solid #3F4B5F'}">
          <div draggable="true" :config="JSON.stringify(item)" @dragstart="dragStart">
            <div style="font-size: 20px;line-height: 40px;"><i :class="item.icon?item.icon:'el-icon-question'"></i>
            </div>
            <div style="font-size: 13px">{{ item.name }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import cptGroups from '@/components/registerCpt'

export default {
  name: "componentBar",
  data() {
    return {
      cptGroups,
      cptGroupKeys:[],
      openedKey:''
    }
  },
  created() {
    for (let key in cptGroups) {
      this.cptGroupKeys.push(key)
    }
    this.openedKey = this.cptGroupKeys[0]
  },
  methods: {
    checkGroup(groupKey){
      this.openedKey = groupKey === this.openedKey?'':this.openedKey = groupKey
    },
    dragStart(e) {
      let copyDom = e.currentTarget.cloneNode(true);
      this.$emit('dragStart', copyDom);
    }
  },
}
</script>

<style scoped>
.cptTitle {line-height: 45px;text-align: center;background: #3F4B5F;}
.el-collapse-item__*{background: #49586E}
</style>
