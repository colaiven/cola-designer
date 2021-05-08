<template>
  <el-row style="width:100%;height:100%;background: #3F4B5F;z-index: 2000;color: #fff;overflow: auto">
    <div v-for="group in cptGroupKeys" :key="group.key">
      <div style="line-height: 45px;" class="hoverPointer" @click="group.opened = !group.opened">
        <div style="display: inline-block;text-indent: 1em;width: 170px;">{{group.name}}</div>
        <div style="display: inline-block;">
          <i :class="group.opened ? 'el-icon-arrow-down':'el-icon-arrow-right'"></i>
        </div>
      </div>
      <el-row :gutter="2" v-show="group.opened">
        <el-col :span="12" v-for="(item,index) in cptGroups[group.key]" :key="item.name+index">
          <div draggable="true" :config="JSON.stringify(item)" @dragstart="dragStart"
               style="background-color: #49586E;height: 70px;text-align: center;margin-top: 2px;">
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
import cptOptions from "@/components/options"//重复引入待优化

export default {
  name: "componentBar",
  data() {
    return {
      cptGroups,cptOptions,
      cptGroupKeys:[],
      openedKey:''
    }
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
    this.openedKey = this.cptGroupKeys[0]
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
.el-collapse-item__*{background: #3F4B5F}
</style>
