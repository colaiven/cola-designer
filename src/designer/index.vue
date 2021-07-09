<template>
  <div>
    <el-row class="top">
      <el-col :span="2" align="right" style="height: 100%;overflow: hidden;">
        <el-image style="width: 45px; height: 45px;padding: 0;margin: 0" :src="require('/src/assets/logo.png')"
                  fit="fill"></el-image>
      </el-col>
      <el-col :span="3">
        <span class="el-icon-box lg" style="width: 30px"></span>
        <span>Cola Designer</span>
      </el-col>
      <el-col :span="19">
        <el-button size="small" @click="preview" style="margin: 10px 10px;
            background: #49586e;color: #fff;float: right">预览</el-button>
        <el-button size="small" @click="submitDesign" style="margin: 10px 5px;background: #d5d9e2;float: right">保存</el-button>
        <div style="float: right;margin: 4px 10px;" class="configBtn" @click="showConfigForm">
          <i style="font-size: 22px;" class="el-icon-setting"></i>
        </div>
        <el-popover style="float: right;margin: 4px 10px;"
            placement="bottom" title="已选组件" width="200" trigger="click">
          <div style="overflow: auto" :style="{maxHeight:(conHeight-30)+'px'}">
            <el-row v-for="(item,index) in cacheComponents" :key="item.cptTag+index+'x'" class="selectedItem">
              <el-col :span="4" style="text-align: center"><i :class="item.icon"></i></el-col>
              <el-col :span="20">{{item.cptName}}</el-col>
            </el-row>
          </div>

          <i slot="reference" style="font-size: 22px;" class="el-icon-tickets"></i>
        </el-popover>
      </el-col>
    </el-row>
    <div :style="{height: (windowHeight-50)+'px'}">
      <div style="float: left;height: 100%;" :style="{width:cptBarWidth+'px'}">
        <component-bar @dragStart="dragStart"/><!--左侧组件栏-->
      </div>
      <div style="float: left;" :style="{width:(windowWidth-cptBarWidth-10)+'px'}">
        <div class="webContainer" :style="{width:conWidth+'px',height:conHeight+'px'}" @dragover="allowDrop" @drop="drop">
          <div v-for="(item,index) in cacheComponents" :key="item.cptTag+index"
               class="cptDiv" :style="{width:Math.round(containerScale*item.cptWidth)+'px',
                  height:Math.round(containerScale*item.cptHeight)+'px',
                  top:Math.round(containerScale*item.cptY)+'px',left:Math.round(containerScale*item.cptX)+'px',
                  zIndex:item.cptZ}" @click="showConfigBar(item,index)" :cptIndex="index">
            <div v-dragParent style="width: 100%;height: 100%;overflow: auto;">
              <comment :is="item.cptTag" :width="Math.round(containerScale*item.cptWidth)"
                       :height="Math.round(containerScale*item.cptHeight)" :option="item.option"/>
            </div>
            <div class="delTag" @click.stop="delCpt(item)"><i class="el-icon-delete"/></div>
            <div class="resizeTag" v-resize></div>
          </div>
        </div>
      </div>
    </div>
    <config-bar v-show="configBarShow" ref="configBar" @change="changeCpt" @close="closeConfigBar"
                :currentCpt="currentCpt"/><!--右侧属性栏-->
    <config-form ref="configForm"/>
  </div>
</template>

<script>
import ComponentBar from "@/designer/componentBar";
import ConfigBar from "@/designer/configBar";
import cptOptions from "@/components/options"
import ConfigForm from "@/designer/configForm";

export default {
  name: 'design-index',
  components: {ConfigForm, ConfigBar, ComponentBar},
  data() {
    return {
      cptBarWidth:200,
      windowWidth:document.documentElement.clientWidth,
      windowHeight:document.documentElement.clientHeight,
      conWidth: 0,
      conHeight: 0,
      copyDom: '',
      cacheComponents:[],
      configBarShow: false,
      currentCptIndex: 0,
      currentCpt: {option: undefined},
      containerScale:1,
    }
  },
  created() {
    this.initContainerSize();
  },
  methods: {
    initContainerSize(){
      let tempWidth = this.windowWidth - this.cptBarWidth - 40;//流出空隙
      let tempHeight = tempWidth / 16 * 9;
      if (tempHeight > this.windowHeight - 88){//上下边框各占1px
        tempHeight = this.windowHeight - 88;
        tempWidth = tempHeight / 9 * 16
      }
      this.conWidth = tempWidth;
      this.conHeight = tempHeight;
      //缩放思路：组件尺寸始终保持1024为基准，保证在每台电脑上的尺寸一致，设计实时缩放，需同步更新配置栏数据
      this.containerScale = tempWidth / 1024//原始比例1024:576
    },
    submitDesign() {
      console.log('组件数据', this.cacheComponents)
    },
    preview() {
      let designCache = {
        title:'我的大屏',bgColor:'#2B3340',
        comments:this.cacheComponents
      }
      localStorage.setItem('designCache', JSON.stringify(designCache));
      let routeUrl = this.$router.resolve({
        path: "/preview"
      });
      window.open(routeUrl.href, '_blank');
    },
    delCpt(cpt) {
      this.cacheComponents.splice(this.cacheComponents.indexOf(cpt), 1);
      this.configBarShow = false;
    },
    changeCpt(position) {//基础属性修改
      position.cptTag = this.cacheComponents[this.currentCptIndex].cptTag;
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
      console.log(config)
      let cpt = {
        groupTag: config.group, cptName:config.name, icon: config.icon,
        cptTag: config.tag, cptZ: 1, option: undefined,
        cptX: Math.round(e.offsetX / this.containerScale),
        cptY: Math.round(e.offsetY / this.containerScale),
        cptWidth: config.initWidth, cptHeight: config.initHeight
      }
      const group = cptOptions[config.group];
      if (group && group.options[config.tag + '-option']) {
        const option = group.options[config.tag + '-option']
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
    },
    showConfigForm() {
      this.$refs['configForm'].opened();
    }
  },
  directives: {
    dragParent(el, binding, vNode) {//页面上的组件挪到位置
      const that = vNode.context;
      el.onmousedown = function (e) {
        const disX = e.clientX - el.parentNode.offsetLeft;
        const disY = e.clientY - el.parentNode.offsetTop;
        let cptX = e.clientX - disX, cptY = e.clientY - disY;
        document.onmousemove = function (me) {
          cptX = me.clientX - disX;
          cptY = me.clientY - disY;
          el.parentNode.style.left = cptX + 'px';
          el.parentNode.style.top = cptY + 'px';
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
          const cptIndex = el.parentNode.getAttribute('cptIndex')
          //缩放适应不同屏幕，在容器显示时会重新*缩放比例
          that.cacheComponents[cptIndex].cptX = Math.round(cptX/that.containerScale);
          that.cacheComponents[cptIndex].cptY = Math.round(cptY/that.containerScale);
        }
        return false;
      }
    },
    resize(el, binding, vNode) {//组件拉伸
      const that = vNode.context;
      el.onmousedown = function (e) {
        const disX = e.clientX - el.parentNode.offsetWidth;
        const disY = e.clientY - el.parentNode.offsetHeight;
        let cptWidth,cptHeight;
        document.onmousemove = function (me) {
          cptWidth = me.clientX - disX;
          cptHeight = me.clientY - disY;
          cptWidth = cptWidth < 40 ? 40:cptWidth;//限制最小缩放
          cptHeight = cptHeight < 20 ? 20:cptHeight;
          el.parentNode.style.width = cptWidth + 'px';
          el.parentNode.style.height = cptHeight+ 'px';
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
          const cptIndex = el.parentNode.getAttribute('cptIndex');
          //拉伸适应不同屏幕，在容器显示时会重新*缩放比例
          that.cacheComponents[cptIndex].cptWidth = Math.round(cptWidth/that.containerScale);
          that.cacheComponents[cptIndex].cptHeight = Math.round(cptHeight/that.containerScale);
          that.$refs['configBar'].updateData(that.cacheComponents[cptIndex]);//解决缩放组件被遮挡时 配置栏数据不更新
        }
        return false;
      }
    }
  },
}
</script>

<style scoped>
.top {height: 50px;box-shadow: 0 2px 5px #222 inset;color: #fff;overflow: hidden;
  margin: 0;font-size: 18px;line-height: 48px;background: #353F50}
.webContainer {border: 1px dashed #ccc;margin: 10px auto;background: #2B3340;position: relative}
.cptDiv {position: absolute;border: 1px dashed rgba(102, 177, 205, 0.6);}
.delTag {width: 20px;height: 20px;background: rgba(43, 51, 64, 0.8);border-radius: 2px;color: #ccc;z-index: 2000;
  position: absolute;top: 0;right: 0;text-align: center;display: none
}
.delTag:hover {cursor: pointer}
.cptDiv:hover .delTag {display: block}
.resizeTag{width: 10px;height: 10px;position: absolute;bottom: -5px;right: -5px;background-color: #49586e;z-index: 2600;border-radius: 50%}
.resizeTag:hover{cursor: nwse-resize}
.configBtn:hover{cursor: pointer;color: #B6BFCE}
.selectedItem{margin-top: 2px;line-height: 35px;border-radius: 4px;}
.selectedItem:hover{cursor: pointer;background: #ddd}
</style>
