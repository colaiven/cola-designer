<template>
  <div>
    <el-row class="top">
      <el-col :span="2" align="right" style="height: 100%;overflow: hidden;">
        <el-image style="width: 40px; height: 40px;padding: 0;margin: 0" :src="require('/src/assets/logo.png')"
                  fit="fill"/>
      </el-col>
      <el-col :span="3">
        <span class="el-icon-magic-stick lg" style="width: 30px"/>
        <span>Cola Designer</span>
        <a style="margin: 0 4px;" href='https://gitee.com/colaiven/cola-designer' target="_blank">
          <el-image style="width: 50px; height: 16px;padding: 0;margin: 0" src='https://gitee.com/colaiven/cola-designer/badge/star.svg?theme=dark' alt='star'/>
        </a>
      </el-col>
      <el-col :span="19" @click.self.native="outBlur">
        <el-button size="mini" @click="preview" style="margin: 10px 10px;
            background: #49586e;color: #fff;float: right">预览</el-button>
        <el-button size="mini" @click="submitDesign" style="margin: 10px 5px;background: #d5d9e2;float: right">保存</el-button>
        <div style="float: right;margin: 1px 10px;" class="configBtn" @click="showConfigForm">
          <i style="font-size: 22px;" class="el-icon-setting"/>
        </div>
        <el-popover style="float: right;margin: 1px 10px;"
                    placement="bottom" title="已选图层" width="200" trigger="click">
          <div style="overflow: auto" :style="{maxHeight:(conHeight-30)+'px'}">
            <el-row v-for="(item,index) in cacheComponents" :key="item.cptName+index+'x'" class="selectedItem">
              <el-col :span="4" style="text-align: center"><i :class="item.icon"/></el-col>
              <el-col :span="15" @click.native="showConfigBar(item,index)">{{item.cptTitle}}</el-col>
              <el-col :span="5" style="text-align: center">
                <i class="el-icon-copy-document" @click="copyCpt(item)"/>
                <i style="margin-left: 4px;" class="el-icon-delete" @click="delCpt(item,index)"/>
              </el-col>
            </el-row>
          </div>

          <i slot="reference" style="font-size: 22px;" class="el-icon-tickets"/>
        </el-popover>
        <div style="float: right;margin: 1px 10px;" class="configBtn" @click="clearDesign">
          <i style="font-size: 22px;" class="el-icon-delete"/>
        </div>
        <div style="float: right;margin: 0 10px;">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              导出<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="img">图片</el-dropdown-item>
              <el-dropdown-item command="json">JSON</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div style="float: right;margin: 0 10px;">
          <span style="font-size: 14px;color: #aaa">导入</span>
        </div>
      </el-col>
    </el-row>
    <div :style="{height: (windowHeight-45)+'px'}" @click.self="outBlur">
      <div style="float: left;height: 100%;" :style="{width:cptBarWidth+'px'}">
        <component-bar @dragStart="dragStart"/><!--左侧组件栏-->
      </div>
      <div style="float: left;" :style="{width:(windowWidth-cptBarWidth-10)+'px'}" @click.self="outBlur">
        <div class="webContainer" :style="{width:conWidth+'px',height:conHeight+'px',
                  backgroundColor: designData.bgColor}" @dragover="allowDrop" @drop="drop" ref="webContainer">
          <div v-for="(item,index) in cacheComponents" :key="item.cptName+index"
               :class="currentCptIndex === index ? {'focusCptClass':true}:{'cptDiv':true}"
               :style="{width:Math.round(containerScale*item.cptWidth)+'px',
                  height:Math.round(containerScale*item.cptHeight)+'px',
                  top:Math.round(containerScale*item.cptY)+'px',left:Math.round(containerScale*item.cptX)+'px',
                  zIndex:item.cptZ}"
               @mousedown="showConfigBar(item,index)" :cptIndex="index">
            <div v-dragParent style="width: 100%;height: 100%;overflow: auto;">
              <comment :is="item.cptName" :ref="item.cptName+index" :width="Math.round(containerScale*item.cptWidth)"
                       :height="Math.round(containerScale*item.cptHeight)" :option="item.option"/>
            </div>
            <div class="delTag">
              <i class="el-icon-copy-document" @click.stop="copyCpt(item)"/>
              <i style="margin-left: 4px" class="el-icon-delete" @click.stop="delCpt(item,index)"/>
            </div>
            <div v-show="currentCptIndex === index" class="resizeTag" v-resize/>
          </div>
        </div>
      </div>
    </div>
    <config-bar ref="configBar" @change="changeCpt"
                :currentCpt="currentCpt" @refreshCptData="refreshCptData"/><!--右侧属性栏-->
    <config-form ref="configForm" :formData="designData" @saveConfigForm="saveConfigForm" @cancel="cancelConfigForm"/>
  </div>
</template>

<script>
import ComponentBar from "@/views/designer/componentBar";
import ConfigBar from "@/views/designer/configBar";
import cptOptions from "@/components/options"
import ConfigForm from "@/views/designer/configForm";
import html2canvas from 'html2canvas';

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
      designData:{
        id:'',title:'我的大屏',bgColor:'#2B3340',simpleDesc:'',bgImg:'',viewCode:'',components:[]
      },
      oldDesignData:'',//大屏参数表单未保存时还原
      cacheComponents:[],
      currentCptIndex: -1,
      currentCpt: {option: undefined},
      containerScale:1
    }
  },
  created() {
    this.initContainerSize();
    this.loadCacheData();
  },
  methods: {
    handleCommand(command) {
      if(command === 'img'){
        html2canvas(this.$refs.webContainer, {
          backgroundColor: '#ffffff'
        }).then(canvas => {
          const imgUrl = canvas.toDataURL("image/jpeg");
          this.fileDownload(imgUrl,'.png');
        })
      }else if(command === 'json'){
        this.designData.comments = this.cacheComponents;
        const data = JSON.stringify(this.designData)
        let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(data);//encodeURIComponent解决中文乱码
        this.fileDownload(uri,'.json');
      }
    },
    fileDownload(downloadUrl,suffix) {
      let aLink = document.createElement("a");
      aLink.style.display = "none";
      aLink.href = downloadUrl;
      aLink.download = this.designData.title+suffix;
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
    clearDesign(){
      this.$confirm('此操作将会清空图层，是否继续？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.cacheComponents = [];
        this.designData.components = [];
        localStorage.removeItem('designCache');
        this.$message.success("清除成功");
      }).catch(() => {});
    },
    loadCacheData(){
      const cacheStr = localStorage.getItem('designCache');
      if (cacheStr){
        this.designData = JSON.parse(cacheStr);
        this.cacheComponents = this.designData.components;
        this.designData.components = [];//单纯洁癖
      }
    },
    copyCpt(item){
      let copyItem = JSON.parse(JSON.stringify(item))
      copyItem.cptX = item.cptX+30//复制的组件向右下偏移
      copyItem.cptY = item.cptY+30
      this.cacheComponents.push(copyItem);
      this.currentCptIndex = this.cacheComponents.length - 1//聚焦到复制的组件
    },
    refreshCptData(){
      const refName = this.currentCpt.cptName + this.currentCptIndex;
      if(!this.$refs[refName][0].refreshCptData){
        this.$message.warning('当前图层还未实现refreshCptData方法')
      }else {
        this.$refs[refName][0].refreshCptData();//刷新子组件数据，refs为组建名加index
      }
    },
    outBlur(){//取消聚焦组件
      this.currentCptIndex = -1;
      this.currentCpt = undefined;
      //this.configBarShow = false;
    },
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
      this.containerScale = tempWidth / 1024//原始比例1024:576  16:9
    },
    submitDesign() {//保存到缓存
      this.designData.components = this.cacheComponents;
      localStorage.setItem('designCache', JSON.stringify(this.designData));
    },
    preview() {//预览按钮
      this.designData.components = this.cacheComponents;
      localStorage.setItem('designCache', JSON.stringify(this.designData));
      let routeUrl = this.$router.resolve({
        path: "/preview"
      });
      window.open(routeUrl.href, '_blank');
    },
    delCpt(cpt,index) {
      this.$confirm('删除'+cpt.cptTitle+'组件?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.cacheComponents.splice(index, 1);
        //this.configBarShow = false;
        this.currentCpt = undefined;
      }).catch(() => {});
    },
    changeCpt(position) {//基础属性修改
      position.cptName = this.cacheComponents[this.currentCptIndex].cptName;
      position.option = this.cacheComponents[this.currentCptIndex].option;//这俩句突然搞忘了为啥存在，空了再来看看
      this.cacheComponents[this.currentCptIndex] = position
      this.cacheComponents.splice(0, 1, this.cacheComponents[0])
    },
    showConfigBar(item, index) {//刷新属性栏数据，页面上拖动的组件执行click事件来更新组件的属性栏
      this.currentCpt = item;
      this.currentCptIndex = index;
      let currentCptPosition = {
        groupTag:item.groupTag, cptTitle:item.cptTitle, icon:item.icon,
        cptWidth: item.cptWidth,
        cptHeight: item.cptHeight,
        cptX: item.cptX, cptY: item.cptY, cptZ: item.cptZ
      }
      this.$refs['configBar'].updateData(currentCptPosition);
    },
    dragStart(copyDom) {//从组件栏拿起组件
      this.copyDom = copyDom;
      copyDom.draggable = false;
    },
    saveConfigForm(formData){
      this.designData = formData;
    },
    cancelConfigForm(){//设置表单关闭
      this.designData = JSON.parse(this.oldDesignData)
    },
    allowDrop(e) {e.preventDefault()},
    drop(e) {//从组件栏丢下组件
      let config = JSON.parse(this.copyDom.getAttribute('config'));
      let cpt = {
        groupTag: config.group, cptTitle:config.title, icon: config.icon,
        cptName: config.name, cptZ: 1, option: undefined,
        cptX: Math.round(e.offsetX / this.containerScale),
        cptY: Math.round(e.offsetY / this.containerScale),
        cptWidth: config.initWidth, cptHeight: config.initHeight
      }
      const group = cptOptions[config.group];
      if (group && group.options[config.name + '-option']) {
        const option = group.options[config.name + '-option']
        cpt.option = JSON.parse(JSON.stringify(option))
      }else {
        this.$message.error("未再options.js中查找到"+config.group+"."+config.name+"-option的自定义属性")
        return;
      }
      this.cacheComponents.push(cpt);
      this.showConfigBar(cpt, this.cacheComponents.length - 1)//丢下组件后刷新组件属性栏
      this.$refs['configBar'].showConfigBar();
    },
    showConfigForm() {
      this.oldDesignData = JSON.stringify(this.designData)//保存原有数据，点击取消时还原
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
          that.$refs['configBar'].updateData(that.cacheComponents[cptIndex]);//解决组件移动位置配置栏数据不更新问题
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
.top {height: 45px;box-shadow: 0 2px 5px #222 inset;color: #fff;overflow: hidden;
  margin: 0;font-size: 18px;line-height: 48px;background: #353F50}
.webContainer {border: 1px dashed #ccc;margin: 10px auto;position: relative;}
.cptDiv {position: absolute;}
.focusCptClass {
  position: absolute;
  border: 1px dashed rgba(102, 177, 205, 0.6);
  background-color: rgba(140, 197, 255, 0.4)
}
.delTag {width: 45px;height: 22px;background: rgba(43, 51, 64, 0.8);border-radius: 2px;color: #ccc;z-index: 2000;
  position: absolute;top: 0;right: 0;text-align: center;display: none;cursor: pointer
}
.cptDiv:hover .delTag {display: block}
.focusCptClass:hover .delTag {display: block}
.resizeTag{width: 10px;height: 10px;position: absolute;bottom: -5px;right: -5px;background-color: #49586e;z-index: 2600;border-radius: 50%}
.resizeTag:hover{cursor: nwse-resize}
.configBtn:hover{cursor: pointer;color: #B6BFCE}
.selectedItem{margin-top: 2px;line-height: 35px;border-radius: 4px;}
.selectedItem:hover{cursor: pointer;background: #ddd}
.el-dropdown-link { cursor: pointer; color: #fff;}
</style>
