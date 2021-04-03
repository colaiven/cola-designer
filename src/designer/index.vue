<template>
  <div>
    <div class="top">
      <el-row :gutter="24" style="margin: 0;font-size: 18px;line-height: 60px;">
        <el-col :span="2" align="right">
          <el-image style="width: 50px; height: 50px" :src="require('/src/assets/logo.png')"
                    fit="fill"></el-image>
        </el-col>
        <el-col :span="3" align="left">
          <span class="el-icon-box lg" style="width: 30px"></span>
          <span>网站管理</span>
        </el-col>
        <el-col :span="19" align="right">
          <el-button type="primary" @click="submitDesign">保存</el-button>
          <el-button type="primary" plain @click="preview">预览</el-button>
          <el-button type="primary" plain>取消</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="webContainer" @dragover="allowDrop" @drop="drop">
      <div v-for="(item,index) in cacheComponents" :key="item+index"
           v-drag class="cptDiv" :style="{width:item.cptWidth+'px',height:item.cptHeight+'px',
                  top:item.cptY+'px',left:item.cptX+'px',zIndex:item.cptZ}"
           @click="showConfigBar(item,index)" :cptIndex="index">
        <comment :is="item.cptName" :width="item.cptWidth" :height="item.cptHeight"
                 :option="item.option"></comment>
        <div class="delTag" @click.stop="delCpt(item)"><i class="el-icon-delete"/></div>
      </div>
    </div>
    <div style="position: fixed;bottom:20px;left:40px;">
      <el-button type="success" icon="el-icon-suitcase-1" circle
                 @click="componentBarShow = !componentBarShow"></el-button>
    </div>
    <component-bar v-show="componentBarShow" @dragStart="dragStart"/><!--左侧组件栏-->
    <config-bar v-show="configBarShow" ref="configBar" @change="changeCpt" @close="closeConfigBar"
                :currentCpt="currentCpt"></config-bar><!--右侧属性栏-->
  </div>
</template>

<script>
import ComponentBar from "@/designer/componentBar";
import ConfigBar from "@/designer/configBar";
import cptOptions from "@/components/options"

export default {
  name: 'design-index',
  components: {ConfigBar, ComponentBar},
  data() {
    return {
      copyDom: '',
      componentBarShow: true,
      cacheComponents:[],
      configBarShow: false,
      currentCptIndex: 0,
      currentCpt: {option: undefined},
    }
  },
  methods: {
    submitDesign() {
      console.log('组件数据', this.cacheComponents)
    },
    preview() {
      localStorage.setItem('cptCache', JSON.stringify(this.cacheComponents));
      window.open('/preview', '_blank')
    },
    delCpt(cpt) {
      this.cacheComponents.splice(this.cacheComponents.indexOf(cpt), 1);
      this.configBarShow = false;
    },
    changeCpt(position) {//基础属性修改
      position.cptName = this.cacheComponents[this.currentCptIndex].cptName;
      position.option = this.cacheComponents[this.currentCptIndex].option;
      this.cacheComponents[this.currentCptIndex] = position
      this.cacheComponents.splice(0, 1, this.cacheComponents[0])
    },
    showConfigBar(item, index) {//刷新属性栏数据，页面上拖动的组件执行click事件来更新组件的属性栏
      this.currentCpt = item;
      this.currentCptIndex = index;
      let currentCptPosition = {
        cptWidth: item.cptWidth,
        cptHeight: item.cptHeight,
        cptX: item.cptX,
        cptY: item.cptY,
        cptZ: item.cptZ
      }
      this.$refs['configBar'].updateData(currentCptPosition);
      if (this.configBarShow === false) {
        this.configBarShow = true;
      }
    },
    dragStart(copyDom) {//从组件栏拿起组件
      this.copyDom = copyDom;
      copyDom.draggable = false;
    },
    allowDrop(e) {e.preventDefault()},
    drop(e) {//从组件栏丢下组件
      let config = JSON.parse(this.copyDom.getAttribute('config'));
      let cpt = {
        cptName: config.tag, cptX: e.offsetX, cptY: e.offsetY, cptZ: 1,
        cptWidth: config.initWidth, cptHeight: config.initHeight,
        option: undefined
      }
      const group = cptOptions[config.group];
      if (group && group[config.tag + '-option']) {
        const option = group[config.tag + '-option']
        cpt.option = JSON.parse(JSON.stringify(option))
      }else {
        this.$message.error("未再options.js中查找到"+config.group+"."+config.tag+"-option的自定义属性")
        return;
      }
      this.cacheComponents.push(cpt);
      this.showConfigBar(cpt, this.cacheComponents.length - 1)//丢下组件后刷新组件属性栏
    },
    closeConfigBar() {
      this.configBarShow = false
    }
  },
  directives: {
    drag(el, binding, vNode) {//页面上的组件挪到位置
      const that = vNode.context;
      el.onmousedown = function (e) {
        const disX = e.clientX - el.offsetLeft;
        const disY = e.clientY - el.offsetTop;
        let cptX, cptY;
        document.onmousemove = function (e) {
          cptX = e.clientX - disX;
          cptY = e.clientY - disY
          el.style.left = cptX + 'px';
          el.style.top = cptY + 'px';
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
          const cptIndex = el.getAttribute('cptIndex')
          that.cacheComponents[cptIndex].cptX = cptX;
          that.cacheComponents[cptIndex].cptY = cptY;
        }
        return false;
      }
    }
  },
}
</script>

<style scoped>
.top {height: 60px;border: 1px solid #EBEEF5;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);}
.webContainer {height: 600px;}
.webContainer:hover, .webContainer:active {border: 1px dashed #ccc;}
.cptDiv {position: absolute;overflow: auto;border: 1px dashed rgba(102, 177, 205, 0.6);}
.delTag {z-index: 9999;width: 20px;height: 20px;background: #66b1ff;border-radius: 2px;
  position: absolute;top: 0;right: 0;text-align: center;display: none
}
.delTag:hover {cursor: pointer}
.cptDiv:hover .delTag {display: block}
</style>
